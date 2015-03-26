<?php namespace Services;
use Repositories\IGroupRepository;

/**
 *
 */
class GroupService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(IGroupRepository $repo) {
        $this->repo = $repo;
    }
}