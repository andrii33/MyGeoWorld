<?php namespace Services;
use Repositories\ITaskRepository;

/**
 *
 */
class TaskService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(ITaskRepository $repo) {
        $this->repo = $repo;
    }
}