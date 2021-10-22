<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Activities extends Model
{
    use Sluggable;
    
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'date_start', 'date_end', 'price', 'popularity'
    ];

    protected $table = 'activities';
    protected $primaryKey = 'id';

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

}
