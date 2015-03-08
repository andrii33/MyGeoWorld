<?php

use Eloquent;

class Task extends Eloquent {

	protected $fillable = array('userid', 'name', 'description', 'rundate');

	public function user() {
		return $this->belongsTo('User');
	}

}