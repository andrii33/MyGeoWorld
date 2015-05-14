<?php namespace Entities;

use Eloquent;

class Map extends Eloquent {

	protected $table = 'map';
	protected $fillable = array('name', 'description', 'groupid', 'userid', 'latitude', 'longitude', 'weight', 'access');

	public function user() {
		return $this->belongsTo('User');
	}

	public function group() {
		return $this->belongsTo('Group');
	}

	public function categories() {
		return $this->belongsToMany('Entities\Category', 'category2map', 'mapid', 'categoryid');
	}

}