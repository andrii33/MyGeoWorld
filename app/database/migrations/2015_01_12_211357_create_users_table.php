<?php

use Illuminate\Database\Migrations\Migration;


class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		 Schema::create('users', function($table)
		{
			$table->increments('id');
			$table->string('name', 50);
			$table->string('lastname', 50);
			$table->string('password', 50);
			$table->string('email', 100)->unique();
			$table->string('remember_token', 100);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
