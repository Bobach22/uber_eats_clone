<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class RestaurantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Restaurant::class;
    
    protected $categories=[
        'American,Fast Food,Burgers','Healthy,Mexican','Desserts,Ice Cream and Frozen Yogurt,Bakery',
        'Japanise,Rice-bowls,Asian','American,Burgers,Fast Food','Healthy,Vegan,Juice and Smoothies',
        'Mexican,Latin American,New Mexican,Exclusive','Alcohol','American,Fast Food,wings,Family Meals,Family Friendly',
        'Breakfast and Brunch,American,Coffeee and Tea,Diner,Dessert','Vegetarian,Chinese,Asian,Vegan,Healthy',
        'Chicken,Mexican,Desserts,Fast Food','Italian,Pizza,Vegetarian'
        ];

        protected $images=[
            'bakedbear.jpg','chinalive.jpg','chipotle.jpg','dennys.jpg',
            'ginto.jpg','manvsfries.jpg','mcdonald.jpg','palmetto.jpg',
            'parkside.jpg','slicehouse.jpg','staceys.jpg','tacobell.jpg',
            'wendys.jpg'
        ];

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->name,
            'phone'=>$this->faker->phoneNumber,
            'image'=>$this->images[rand(0,12)],
            'category'=>$this->categories[rand(0,12)],
            'delivery_fee'=>rand(1,10),
            'delivery_time'=>rand(15,45),
            'city'=>$this->faker->city,
            'address'=>$this->faker->address,
            'open'=>9.30,
            'close'=>21.30,
            'lat'=>$this->faker->latitude(30,45),
            'lng'=>$this->faker->longitude(-120,-71),
        ];
    }
}
