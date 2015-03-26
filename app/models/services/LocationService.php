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
}