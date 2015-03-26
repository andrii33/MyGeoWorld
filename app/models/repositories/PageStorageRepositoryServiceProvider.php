<?php namespace Repositories;

namespace Repositories;

use Entities\Address;
use Entities\Pagestorage;
use Repositories\PageStorageRepository;
use Repositories\IPageStorageRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class PageStorageRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        //
        $this->app->bind('Repositories\IPageStorageRepository', function($app)
        {
            return new PageStorageRepository(new Pagestorage());
        });
    }
}