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

    /**
     *
     */
    public function getDashboard() {
        $maps = Map::getCurentUsersMaps();
        $this->layout->content = View::make('dashboard.dashboard')->with('maps', $maps);
    }

    /**
     * @return string
     */
    public function showMap() {
        $id = Input::get('id');
        $locations = Location::getLocationsByMapId($id);
        $locationsArr = array();
        $groupArr = array();
        foreach ($locations as $location) {
            $locationsArr[] = array(
                'name' => $location->name,
                'description' => $location->description,
                'image' => $location->image,
                'latitude' => $location->latitude,
                'longitude' => $location->longitude,
                'groupby' => $location->groupby
            );
            if (!empty($location->groupby)) {
                if (isset($groupArr[$location->groupby])) {
                    $groupArr[$location->groupby] = $groupArr[$location->groupby] + 1;
                } else {
                    $groupArr[$location->groupby] = 1; // one element of the group
                }
            }
        }
        $tmp = array();
        foreach ($groupArr as $key => $val) {
            $tmp[] = array(
               'key' => $key,
               'val' => $val
            );
        }
        $finalResult = array(
            'locations' => $locationsArr,
            'groupby' => $tmp
        );
        return json_encode($finalResult);
    }

    /**
     * @return string
     */
    public function deleteMap() {
        $id = Input::get('id');
        Map::delete($id);
        return 'ok';
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     * @throws Exception
     */
    public function uploadFile() {
        try {
            $map = Map::createMapFromXls(
                Input::file('file'),
                0,
                Input::get('name'),
                Input::get('description'),
                Input::get('address-column-name'),
                Input::get('base-address'),
                Input::get('name-column-name'),
                Input::get('description-column-name'),
                Input::get('rating-column-name'),
                Input::get('groupby-column-name')
                );
            if (empty($map)) {
                throw new Exception('Failed to create map');
            }
            return Redirect::to('/dashboard')->with('message', 'File successfully uploaded.');
        } catch (Exception $e) {
            throw $e;
            return Redirect::to('/dashboard')->with('message', $e->getTraceAsString());
        }
    }
}