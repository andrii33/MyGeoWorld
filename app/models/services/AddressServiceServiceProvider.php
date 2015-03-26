<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class AddressServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('AddressService', function($app)
        {
            return new AddressService(
                $app['Repositories\IAddressRepository']
            );
        });
    }
}