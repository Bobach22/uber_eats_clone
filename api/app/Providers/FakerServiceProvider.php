<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Faker\Generator as Faker;
class FakerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('Faker',function($app){
            $faker=\Faker\Factory::create();
            $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
            
            return $faker;
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
