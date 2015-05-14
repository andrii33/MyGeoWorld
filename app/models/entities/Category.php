<?php namespace Entities;

use Eloquent;

class Category extends Eloquent {

	protected $table = 'category';
	protected $fillable = array('name', 'description');

	public function maps() {
		return $this->belongsToMany('Map', 'category2map', 'categoryid', 'mapid');
	}
}