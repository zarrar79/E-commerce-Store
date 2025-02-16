<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'buyer_id',
        'total_products',
    ];

    /**
     * Get the product associated with the wishlist.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the buyer associated with the wishlist.
     */
    public function buyer()
    {
        return $this->belongsTo(Buyer::class);
    }
}
