<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdmin2groupTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('admin2group', function($table)
		{
			$table->increments('id');
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
		Schema::drop('admin2group');
	}

}
