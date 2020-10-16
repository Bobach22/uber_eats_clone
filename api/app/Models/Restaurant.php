<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable=['name','phone','image','category','city','address','open','close'];


    public function menus(){
        return $this->hasMany(Menu::class);
    }
    
}
