<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Meal;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        if(Auth::check()){

        DB::beginTransaction();
        try{
        $total_order_price=(int)$request->quantity*Meal::find($request->meal_id,['price'])->price;

        $order=Order::create([
            'user_id'=>$request->user_id,
            'total_order_price'=>$total_order_price,
            'notes'=>$request->notes
        ]);

        $order_item=OrderItem::create([
            'order_id'=>$order->id,
            'meal_id'=>$request->meal_id,
            'quantity'=>$request->quantity
        ]);

        DB::commit();
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json(array_merge($order,$order_item),201);

        }

        else {
            $cart=Session::get('cart');
            $product=$request->all();

            if(isset($cart[$product['id']])){
                $cart[$product['id']]['quantity']+=$product['quantity'];
            }else{
                $cart[$product['id']]=$product;
            }

            Session::put('cart',$cart);

            return Response::json(['success'=>true,'cart_item'=>$product,'message'=>'Cart Updated','cart'=>$cart],200);
        }        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
