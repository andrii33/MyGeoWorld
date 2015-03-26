<?php namespace Entities;

use Eloquent;

class Category extends Eloquent {

	protected $fillable = array('name', 'description');

}