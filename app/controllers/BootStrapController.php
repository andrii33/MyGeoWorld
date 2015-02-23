<?php

class BootStrapController extends BaseController {

	protected $layout = "layouts.main";


	public function getTest() {
		$this->layout->content = View::make('bootstrap');
	}

}
