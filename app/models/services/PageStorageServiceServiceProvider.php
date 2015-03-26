<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class PageStorageServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('PageStorageService', function($app)
        {
            return new PageStorageService(
                $app['Repositories\IPageStorageRepository']
            );
        });
    }
}