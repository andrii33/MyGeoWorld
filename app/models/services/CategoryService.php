<?php namespace Services;
use Repositories\ICategoryRepository;

/**
 *
 */
class CategoryService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(ICategoryRepository $repo) {
        $this->repo = $repo;
    }

    /**
     * @return mixed
     */
    public function getCategories() {
        return $this->repo->get();
    }
}