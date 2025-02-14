<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'rating',
        'price',
        'colors',
        'size',
        'count',
        'offer',
        'on_sale',
        'new_arrival',
        'category',
        'image',
        'vendor_id'
    ];

    protected $casts = [
        'colors' => 'array', // Cast colors JSON to an array
        'on_sale' => 'boolean',
        'new_arrival' => 'boolean',
    ];

    /**
     * Relationship with Vendor.
     * If products belong to a vendor, add this relation.
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }
}
