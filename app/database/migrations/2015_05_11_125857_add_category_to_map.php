<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCategoryToMap extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('category2map', function($table)
		{
			$table->increments('id');
			$table->integer('categoryid');
			$table->integer('mapid');
			$table->timestamps();

			$table->index('categoryid');
			$table->index('mapid');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('category2map');
	}

}
