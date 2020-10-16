<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'restaurant_id'=>$this->restaurant_id,
            'meals'=>MealResource::collection($this->whenLoaded('meals'))
        ];
        // return parent::toArray($request);
    }
}
