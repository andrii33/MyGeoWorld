<?php namespace Services;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
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
     * @param $id
     * @return mixed
     */
    public function getMapById($id) {
        return $this->repo->getById($id);
    }

    /**
     * @param $paginationCount
     * @return mixed
     */
    public function getAllMaps($paginationCount) {
        $maps = DB::table('map')->paginate($paginationCount);

        return $maps;
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
        $baseAddress = '',
        $nameColumnNume = 'name',
        $descriptionColumnNume = 'description',
        $ratingColumnNume = 'rating',
        $groupByColumnName = 'groupby'
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
        if (empty($results)) {
            return false;
        }
        $data = array(
            'name' => $name,
            'description' => $description,
            'userid' => Auth::user()->id,
            'groupid' => $groupId
        );
        $map = $this->create($data);

        if (!empty($baseAddress)) {
            $baseAddress = $baseAddress.' ';
        }
        $created = false;
        foreach ($results as $resultRow) {
            try {
                if (empty($resultRow[$addressColumnNume])) {
                    continue;
                }
                $geoAddress = Address::getGeoAddress($baseAddress.$resultRow[$addressColumnNume]);
                $data = array(
                    'name' => isset($resultRow[$nameColumnNume]) ? $resultRow[$nameColumnNume] : '',
                    'description' => isset($resultRow[$descriptionColumnNume]) ? $resultRow[$descriptionColumnNume] : '',
                    'image' => '',
                    'mapid' => $map->id,
                    'latitude' => $geoAddress->latitude,
                    'longitude' => $geoAddress->longitude,
                    'weight' => isset($resultRow[$ratingColumnNume]) ? $resultRow[$ratingColumnNume] : '',
                    'groupby' => isset($resultRow[$groupByColumnName]) ? $resultRow[$groupByColumnName] : '',
                );
//                print "<pre>"; print_r($data); print "</pre>"; exit;
                Location::create($data);
                $created = true;
            } catch (Exception $e) {

            } catch (\Exception $e) {

            }
        }
        if (!$created) {
            $map->delete();
            return false;
        }
        return $map;
    }

    /**
     * @param $id
     * @return bool
     */
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
     * @param $id
     */
    public function makePublic($id) {
        $this->repo->makePublic($id);
    }

    /**
     * @param $mapId
     * @param $categoryId
     */
    public function addCategoryById($mapId, $categoryId) {
        $this->repo->addCategoryById($mapId, $categoryId);
    }

    /**
     * @param $mapId
     * @param $categoryId
     */
    public function deleteCategoryById($mapId, $categoryId) {
        $this->repo->deleteCategoryById($mapId, $categoryId);
    }

    /**
     * @param $id
     */
    public function makePrivate($id) {
        $this->repo->makePrivate($id);
    }

    /**
     * @param $id
     */
    public function getMapCategories($id) {
        $categories = $this->repo->getCurrentMapCategories($id);
        return $categories;
    }

    /**
     * @param $id
     * @param $data
     */
    public function updateById($id, $data) {
        $this->repo->updateById($id, $data);
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->repo->update($data);
    }
}