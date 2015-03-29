<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Map;

class MapRepository extends BaseRepository implements IMapRepository {

    public function __construct(Map $model) {
        $this->model = $model;
    }
}