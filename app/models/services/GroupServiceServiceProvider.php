<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class GroupServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('GroupService', function($app)
        {
            return new AddressService(
                $app['Repositories\IGroupRepository']
            );
        });
    }
}