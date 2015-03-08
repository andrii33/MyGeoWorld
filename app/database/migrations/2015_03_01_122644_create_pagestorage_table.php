<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagestorageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pagestorage', function($table)
		{
			$table->increments('id');
			$table->string('key', 32);
			$table->integer('userid');
			$table->integer('groupid');
			$table->date('created');
			$table->binary('content');
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
		Schema::drop('pagestorage');
	}

}
