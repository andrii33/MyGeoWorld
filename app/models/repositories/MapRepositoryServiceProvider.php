<?php namespace Repositories;

namespace Repositories;

use Entities\Map;
use Repositories\MapRepository;
use Repositories\IMapRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class MapRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace
        $this->app->bind('Repositories\IMapRepository', function($app)
        {
            return new MapRepository(new Map());
        });
    }
}