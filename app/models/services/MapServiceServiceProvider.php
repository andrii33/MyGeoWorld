<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class MapServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('MapService', function($app)
        {
            return new MapService(
                $app['Repositories\IMapRepository']
            );
        });
    }
}