<?php

namespace App\Providers;

use App\ExampleService;
use Illuminate\Support\ServiceProvider;


class AppServiceProvider extends ServiceProvider
{


    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('Faker',function(){
            $faker=\Faker\Factory::create();
            $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
            
            return $faker;
        });

        
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
