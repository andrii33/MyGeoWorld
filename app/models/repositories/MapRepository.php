<?php
namespace Repositories;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Repositories\Base\BaseRepository;
use Entities\Map;

class MapRepository extends BaseRepository implements IMapRepository {

    public function __construct(Map $model) {
        $this->model = $model;
    }

    /**
     * @param $id
     */
    public function makePublic($id) {
        $this->updateById($id, array('access' => 'public'));
    }

    /**
     * @param $id
     */
    public function makePrivate($id) {
        $this->updateById($id, array('access' => 'private'));
    }

    /**
     * @param $id
     * @param $categoryId
     */
    public function addCategoryById($id, $categoryId) {
        $map = $this->getById($id);
        $currentCategories = $map->categories()->lists('categoryid');
        if ( !in_array($categoryId, $currentCategories) ) {
            $map->categories()->attach($categoryId);
        }
    }

    /**
     * @param $mapId
     * @return mixed
     */
    public function getCurrentMapCategories($mapId) {
        try {
            $map = $this->getById($mapId);
            $currentCategories = $map->categories()->lists('categoryid');
            return $currentCategories;
        } catch (Exception $e) {
            return array();
        }
    }

    /**
     * @param $id
     * @param $categoryId
     */
    public function deleteCategoryById($id, $categoryId) {
        $map = $this->getById($id);
        $currentCategories = $map->categories()->lists('categoryid');
        if ( in_array($categoryId, $currentCategories) ) {
            $map->categories()->detach($categoryId);
        }
    }
}