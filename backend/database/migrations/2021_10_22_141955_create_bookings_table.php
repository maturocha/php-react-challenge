<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {

            $table->increments('id');
            $table->integer('activity_id')->unsigned();

            $table->foreign('activity_id')
                    ->references('id')
                    ->on('activities')
                    ->onDelete('cascade');

            $table->string('email');

            $table->integer('quantity');
            $table->decimal('price_booking', 10, 2);
            $table->date('date_booking');
            $table->date('date_activity');

            $table->softDeletes();
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
        Schema::dropIfExists('bookings');
    }
}
