<?php

namespace Database\Factories;

use App\Models\Meal;
use App\Models\Menu;
use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class MealFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Meal::class;
    
    protected $images=['food1.jpg','food2.jpg','food3.jpg','food4.jpg','food5.jpg','food6.jpg','food7.jpg','food8.jpg',
                       'food9.jpg','food10.jpg','food11.jpg','food12.jpg','food13.jpg','food14.jpg','food15.jpg','food16.jpg',
                       'food17.jpg','food18.jpg','food19.jpg','food20.jpg','food21.jpg','food22.jpg'];
  
   
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $customFaker=app('Faker');
        return [
            'name'=>$customFaker->foodName,
            'image'=>$this->images[rand(0,21)],
            'price'=>rand(3,40),
            'description'=>$this->faker->sentence(rand(0,15)),
            'menu_id'=>Menu::factory(),
            'supplier_code'=>rand(1,30)
        ];
    }
}
