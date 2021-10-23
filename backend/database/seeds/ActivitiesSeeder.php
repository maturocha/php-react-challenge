<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 100; $i++) {
            DB::table('activities')->insert([
                'title' => 'Activity '.$i,
                'slug' => 'activity-'.$i,
                'description' => 'Lorem Ipsum typesetting activities. Lorem Ipsum seeder example '.$i,
                'date_start' => date('Y-m-d', strtotime( '+'.mt_rand(0,15).' days')),
                'date_end' => date('Y-m-d', strtotime( '+'.mt_rand(15,30).' days')),
                'price' => rand(10, 150),
                'popularity' => rand(1, 5),
            ]);
        }
    }
}
