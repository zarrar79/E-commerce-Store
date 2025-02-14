<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Vendor extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'total_sales',
        'total_profit',
        'top_selling'
    ];

    protected $hidden = ['password'];

    protected $casts = [
        'total_sales' => 'integer',
        'total_profit' => 'decimal:2', // Ensures proper decimal formatting
        'top_selling' => 'integer'
    ];

    /**
     * Mutator to automatically hash passwords
     */
    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn($value) => bcrypt($value),
        );
    }

    /**
     * Get the vendor's products.
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * Get the vendor's top-selling product.
     */
    public function topSellingProduct()
    {
        return $this->belongsTo(Product::class, 'top_selling')->withDefault();
    }
}
