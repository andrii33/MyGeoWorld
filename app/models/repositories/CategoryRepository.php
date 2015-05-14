<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Category;

class CategoryRepository extends BaseRepository implements ICategoryRepository {

    public function __construct(Category $model) {
        $this->model = $model;
    }
}