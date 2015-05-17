<?php

class MainMapsController extends BaseController {

	protected $layout = "layouts.main";

	public function getMainMapsPage() {
		$maps = Map::getAllMaps(3);
		$categories = Category::getCategories();
		$this->layout->content = View::make(
			'mainmaps', array(
				'maps' => $maps,
				'categories' => $categories
			)
		);
	}

}
