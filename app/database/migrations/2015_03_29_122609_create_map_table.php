<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('map', function($table)
		{
			$table->increments('id');
			$table->string('name', 50);
			$table->string('description', 250);
			$table->integer('userid');
			$table->integer('groupid');
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
		Schema::drop('map');
	}

}
