<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class submit extends Model
{
    use HasFactory;
    
    protected $table = 'submits';

    protected $fillable = ['name', 'price'];
}
