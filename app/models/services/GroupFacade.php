<?php namespace Services;
use \Illuminate\Support\Facades\Facade;

/**
 * Facade class to be called whenever the class AddressService is called
 */
class GroupFacade extends Facade {

    /**
     * Get the registered name of the component. This tells $this->app what record to return
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'GroupService'; }

}