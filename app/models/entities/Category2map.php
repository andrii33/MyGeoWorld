<?php namespace Entities;

use Eloquent;

class Category2map extends Eloquent {

	protected $table = 'category2map';
	protected $fillable = ['id', 'categoryid', 'mapid'];

}