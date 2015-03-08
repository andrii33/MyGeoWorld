<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaskTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('task', function($table)
		{
			$table->increments('id');
			$table->integer('userid'); // who create
			$table->string('name', 50);
			$table->string('description', 200);
			$table->date('created');
			$table->date('rundate');
			$table->timestamps();

			$table->index('userid');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('task');
	}

}
