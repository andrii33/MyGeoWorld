<?php

class BootStrapController extends BaseController {

	protected $layout = "layouts.main";


	public function getTest() {

//		$model = $this->_getModel();
//		print_r($model->latitude); exit;

		$address = Address::getGeoAddress('Чернигов, Щорса 4б');
			//Address::makeAddress('Чернигов, Шевченка 95');
//		var_dump($address); exit;

//		$data = array(
//			'latitude' => '1',
//			'longtitude' => '2',
//			'address' => '3',
//			'key' => '4',
//		);
//
//		$addAddress = Address::create($data);
//		var_dump($addAddress);
		$this->layout->content = View::make('bootstrap');
	}

	/**
	 * @return \Entities\Address
	 */
	private function _getModel() {
		return Address::getAddressBuyKey('4');
	}

}
