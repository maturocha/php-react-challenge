<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'activity_id', 'email', 'fullname', 'quantity', 'date_booking', 'price_booking'
    ];

    protected $table = 'bookings';
    protected $primaryKey = 'id';

}
