<?php namespace Repositories;

namespace Repositories;

use Entities\Group;
use Repositories\GroupRepository;
use Repositories\IGroupRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class GroupRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace
        $this->app->bind('Repositories\IGroupRepository', function($app)
        {
            return new GroupRepository(new Group());
        });
    }
}