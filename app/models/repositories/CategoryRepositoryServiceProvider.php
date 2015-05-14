<?php namespace Repositories;

namespace Repositories;

use Entities\Category;
use Repositories\CategoryRepository;
use Repositories\ICategoryRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class CategoryRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace
        $this->app->bind('Repositories\ICategoryRepository', function($app)
        {
            return new CategoryRepository(new Category());
        });
    }
}