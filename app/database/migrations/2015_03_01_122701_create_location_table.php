<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('location', function($table)
		{
			$table->increments('id');
			$table->string('name', 50);
			$table->string('description', 250);
			$table->string('image', 300);
			$table->integer('userid');
			$table->integer('groupid');
			$table->float('latitude');
			$table->float('longitude');
			$table->integer('weight');
			$table->timestamps();

			$table->index('userid');
			$table->index('groupid');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('location');
	}

}
