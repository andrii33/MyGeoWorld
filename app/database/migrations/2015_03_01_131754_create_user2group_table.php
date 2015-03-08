<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUser2groupTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user2group', function($table)
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
		Schema::drop('user2group');
	}

}
