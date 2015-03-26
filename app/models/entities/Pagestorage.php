<?php namespace Entities;

use Eloquent;

class Pagestorage extends Eloquent {

	protected $fillable = array('key', 'userid', 'groupid', 'content');

	public function user() {
		return $this->belongsTo('User');
	}

	public function group() {
		return $this->belongsTo('Group');
	}


}