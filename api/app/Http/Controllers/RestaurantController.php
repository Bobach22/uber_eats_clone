<?php

namespace App\Http\Controllers;

use App\Http\Resources\RestaurantResource;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RestaurantResource::collection(Restaurant::all());
    }
        
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $restaurant=$request->validate([
            'name'=>'required|string',
            'phone'=>'required|string',
            'image'=>'required|string',
            'category'=>'required|string',
            'city'=>'required|string',
            'address'=>'required|string',
            'open'=>'required|between:0,23.59',
            'close'=>'required|between:0,23.59',
        ]);

        if(!$restaurant){
            return [
                'error'=>'Something got wrong',
            ];
        }

        $restaurant=Restaurant::create($restaurant);

        return new RestaurantResource($restaurant);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Restaurant $restaurant)
    {
       return (new RestaurantResource($restaurant->loadMissing('menus.meals')));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    

}
