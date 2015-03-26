<?php namespace Repositories;

namespace Repositories;

use Entities\Location;
use Repositories\LocationRepository;
use Repositories\ILocationRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class LocationRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace
        $this->app->bind('Repositories\ILocationRepository', function($app)
        {
            return new LocationRepository(new Location());
        });
    }
}