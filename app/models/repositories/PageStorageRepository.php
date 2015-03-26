<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Pagestorage;

class PageStorageRepository extends BaseRepository implements IPageStorageRepository {

    public function __construct(Pagestorage $model) {
        $this->model = $model;
    }


}