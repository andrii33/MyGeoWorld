<?php namespace Services;
use Illuminate\Support\ServiceProvider;

/**
 *
 */
class TaskServiceServiceProvider extends ServiceProvider
{
    /**
     *
     *
     */
    public function register()
    {
        $this->app->bind('TaskService', function($app)
        {
            return new PageStorageService(
                $app['Repositories\ITaskRepository']
            );
        });
    }
}