<?php namespace Services;
use Repositories\ILocationRepository;

/**
 *
 */
class LocationService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(ILocationRepository $repo) {
        $this->repo = $repo;
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->repo->create($data);
    }

    /**
     *
     */
    public function delete() {
        $this->repo->delete();
    }

    /**
     * @param $mapId
     * @return mixed
     */
    public function getLocationsByMapId($mapId) {
        $this->repo->where('mapid', $mapId, '=');
        return $this->repo->get();
    }
}