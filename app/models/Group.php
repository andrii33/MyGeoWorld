<?php

use Eloquent;

class Group extends Eloquent {

	protected $fillable = array('name', 'description', 'password');

	public function locations() {
		$this->hasMany('Location');
	}

	public function users() {
		return $this->belongsToMany('User', 'user2group', 'groupid', 'userid');
	}

	public function admins() {
		return $this->belongsToMany('User', 'admin2group', 'groupid', 'userid');
	}

	public function pagestorages() {
		return $this->hasMany('Pagestorage');
	}

	public function tasks() {
		return $this->hasMany('Task');
	}
}