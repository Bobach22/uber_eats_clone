<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1;$i<30;$i++){
            Menu::factory()
                ->times(15)
                ->hasMeals(10)
                ->create(['restaurant_id'=>$i]);
        }
        
    }
}
