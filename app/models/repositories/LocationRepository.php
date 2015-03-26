<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Location;

class LocationRepository extends BaseRepository implements ILocationRepository {

    public function __construct(Location $model) {
        $this->model = $model;
    }
}