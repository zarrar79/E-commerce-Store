<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Buyer extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'buyer';

    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id'
    ];

    protected $hidden = [
        'password',
    ];

    /**
     * Relationship with Product
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
