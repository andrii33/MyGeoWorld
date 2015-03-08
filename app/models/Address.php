<?php

use Eloquent;

class Address extends Eloquent {

	protected $fillable = array('latitude', 'longitude', 'address', 'key');

}