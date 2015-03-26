<?php
namespace Repositories\Base;

use Repositories\Base;
use Illuminate\Support\ServiceProvider;

class BaseRepositoryServiceProvider extends ServiceProvider {

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register() {
        //
    }

    /**
     * Boot the service provider.
     *
     * @return void
     */
    public function boot() {
        $this->package('Repositories/Base');
    }
}