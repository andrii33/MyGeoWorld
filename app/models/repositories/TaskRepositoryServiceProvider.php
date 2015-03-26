<?php namespace Repositories;

namespace Repositories;

use Entities\Task;
use Repositories\TaskRepository;
use Repositories\ITaskRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class TaskRepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register() {
        // Bind the returned class to the namespace
        $this->app->bind('Repositories\ITaskRepository', function($app)
        {
            return new TaskRepository(new Task());
        });
    }
}