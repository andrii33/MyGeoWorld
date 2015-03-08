<?php

use Eloquent;

class Location extends Eloquent {

	protected $fillable = array('name', 'description', 'image', 'userid', 'groupid', 'latitude', 'longitude', 'weight');

	public function user() {
		return $this->belongsTo('User');
	}

	public function group() {
		return $this->belongsTo('Group');
	}


}