<?php

class MapController extends BaseController {

	protected $layout = "layouts.main";


	/**
	 *
	 */
	public function getMap() {
		$categories = Category::getCategories();
		$id = Input::get('id');
		$map = Map::getMapById($id);
		$this->layout->content = View::make(
			'map', array(
				'map' => $map,
				'categories' => $categories
			)
		);
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
	public function getMapCategories() {
		$id = Input::get('mapid');
		return json_encode(Map::getMapCategories($id));
	}

}
