<?php namespace Entities;

use Eloquent;

class Location extends Eloquent {

	protected $table = 'location';
	protected $fillable = array('name', 'description', 'image', 'mapid', 'latitude', 'longitude', 'weight');

	public function map() {
		return $this->belongsTo('Map');
	}

}