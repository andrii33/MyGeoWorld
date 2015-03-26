<?php namespace Entities;

use Eloquent;

class Address extends Eloquent {

	protected $table = 'address';

	protected $fillable = array('latitude', 'longitude', 'address', 'key');

}