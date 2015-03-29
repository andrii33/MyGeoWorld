<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class LocationServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('LocationService', function($app)
        {
            return new LocationService(
                $app['Repositories\ILocationRepository']
            );
        });
    }
}