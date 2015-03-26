<?php namespace Services;
use Repositories\IPageStorageRepository;

/**
 *
 */
class PageStorageService
{

    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(IPageStorageRepository $repo)
    {
        $this->repo = $repo;
    }
}