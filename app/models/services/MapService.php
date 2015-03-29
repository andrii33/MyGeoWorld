<?php namespace Services;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use Repositories\IMapRepository;
use TijsVerkoyen\CssToInlineStyles\Exception;
use Address;
use Location;

/**
 *
 */
class MapService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(IMapRepository $repo) {
        $this->repo = $repo;
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function getCurentUsersMaps() {
        $userId = Auth::user()->id;
        if (is_null($userId)) {
            throw new Exception('Failed current user not found');
        }
        $this->repo->where('userid', $userId, '=');
        return $this->repo->get();
    }

    /**
     * @param \Symfony\Component\HttpFoundation\File\UploadedFile $file
     * @param int $groupId
     * @param string $name
     * @param string $description
     * @param string $addressColumnNume
     * @param string $nameColumnNume
     * @param string $descriptionColumnNume
     * @param string $ratingColumnNume
     * @return mixed
     * @throws Exception
     * @throws \Exception
     */
    public function createMapFromXls(
        \Symfony\Component\HttpFoundation\File\UploadedFile $file,
        $groupId = 0,
        $name = '',
        $description = '',
        $addressColumnNume = 'address',
        $nameColumnNume = 'name',
        $descriptionColumnNume = 'description',
        $ratingColumnNume = 'rating'
    ) {
        $fileName = $file->getRealPath();
        $type =$file->getClientMimeType();
        if ($type != 'application/vnd.ms-excel') {
            throw new Exception('Failed xls file');
        }
        if (empty($fileName)) {
            throw new Exception('Failed file name');
        }
        $reader = Excel::load($fileName);
        $results = $reader->toArray();

        $data = array(
            'name' => $name,
            'description' => $description,
            'userid' => Auth::user()->id,
            'groupid' => $groupId
        );
        $map = $this->create($data);

        foreach ($results as $resultRow) {
            try {
                if (empty($resultRow[$addressColumnNume])) {
                    continue;
                }
                $resultRow[$addressColumnNume] = 'Чернигов '.$resultRow[$addressColumnNume];
                $geoAddress = Address::getGeoAddress($resultRow[$addressColumnNume]);
                $data = array(
                    'name' => isset($resultRow[$nameColumnNume]) ? $resultRow[$nameColumnNume] : '',
                    'description' => isset($resultRow[$descriptionColumnNume]) ? $resultRow[$descriptionColumnNume] : '',
                    'image' => '',
                    'mapid' => $map->id,
                    'latitude' => $geoAddress->latitude,
                    'longitude' => $geoAddress->longitude,
                    'weight' => isset($resultRow[$ratingColumnNume]) ? $resultRow[$ratingColumnNume] : '',
                );
//                print "<pre>"; print_r($data); print "</pre>"; exit;
                Location::create($data);
            } catch (Exception $e) {

            }
        }
        return $map;
    }

    public function delete($id) {
        if (empty($id)) {
            return false;
        }
        $locations = Location::getLocationsByMapId($id);
        foreach ($locations as $location) {
            $location->delete();
        }
        $this->repo->deleteById($id);
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->repo->create($data);
    }
}