<?php
/**
 * Created by PhpStorm.
 * User: Andrii Andriiets
 * Date: 2/14/15
 * Time: 3:34 PM
 */
use Map;
class DashboardController extends BaseController {
    protected $layout = "layouts.dashboard";

    public function __construct() {
        $this->beforeFilter('auth', array('only'=>array('getDashboard')));
    }

    public function getDashboard() {
        $mapsArr = array();
        $maps = Map::getCurentUsersMaps();
//        foreach ($maps as $map) {
//            $mapsArr[] = array(
//                'id' => $map->id,
//                'name' => $map->name
//            );
//        }
        $this->layout->content = View::make('dashboard.dashboard')->with('maps', $maps);
    }

    public function showMap() {
        $id = Input::get('id');
        $locations = Location::getLocationsByMapId($id);
        $locationsArr = array();
        foreach ($locations as $location) {
            $locationsArr[] = array(
                'latitude' => $location->latitude,
                'longitude' => $location->longitude
            );
        }
        return json_encode($locationsArr);
    }

    public function deleteMap() {
        $id = Input::get('id');
        Map::delete($id);
        return 'ok';
    }

    public function uploadFile() {
        try {
            Map::createMapFromXls(Input::file('file'), 0, 'Iboxes2', '1t');

            return Redirect::to('/dashboard')->with('message', 'File successfully uploaded.');
        } catch (Exception $e) {
//            throw $e;
            return Redirect::to('/dashboard')->with('message', $e->getMessage());
        }
    }
}