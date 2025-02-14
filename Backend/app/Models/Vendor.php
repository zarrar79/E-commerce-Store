<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'total_sales',
        'total_profit',
        'top_selling'
    ];

    protected $hidden = [
        'password',
    ];

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
        return $this->belongsTo(Product::class, 'top_selling');
    }
}
