<?php

class MainMapsController extends BaseController {

	protected $layout = "layouts.main";

	/**
	 * Count maps for pagination
	 */
	const MAPS_ON_PAGE = 3;

	public function getMainMapsPage() {
		$maps = Map::getAllMaps(self::MAPS_ON_PAGE);
		$categories = Category::getCategories();
		$this->layout->content = View::make(
			'mainmaps', array(
				'maps' => $maps,
				'categories' => $categories
			)
		);
	}

}
