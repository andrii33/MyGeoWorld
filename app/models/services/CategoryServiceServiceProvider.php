<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class CategoryServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('CategoryService', function($app)
        {
            return new CategoryService(
                $app['Repositories\ICategoryRepository']
            );
        });
    }
}