<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Group;

class GroupRepository extends BaseRepository implements IGroupRepository {

    public function __construct(Group $model) {
        $this->model = $model;
    }
}