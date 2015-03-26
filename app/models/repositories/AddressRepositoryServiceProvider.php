<?php namespace Repositories;

namespace Repositories;

use Entities\Address;
use Repositories\AddressRepository;
use Repositories\IAddressRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class AddressRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the IAddressRepository with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\IAddressRepository
        $this->app->bind('Repositories\IAddressRepository', function($app)
        {
            return new AddressRepository(new Address());
        });
    }
}