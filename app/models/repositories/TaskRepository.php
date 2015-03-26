<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Task;

class TaskRepository extends BaseRepository implements ITaskRepository {

    public function __construct(Task $model) {
        $this->model = $model;
    }

}