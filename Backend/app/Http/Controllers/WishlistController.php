<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;
use App\Models\Product;


class WishlistController extends Controller
{
    public function index(Request $request)
    {
        $buyer = $request->user; // Get authenticated buyer

        $wishlist = Wishlist::where('buyer_id', $buyer->id)
                            ->with('product')
                            ->get();

        return response()->json([
            'success' => true,
            'wishlist' => $wishlist,
            'total_products' => $wishlist->count() // Dynamic total products count
        ]);
    }

    /**
     * Add a product to the wishlist and update the total count.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $buyer = $request->user; // Get authenticated buyer

        // Check if the product is already in the wishlist
        $wishlistItem = Wishlist::where('buyer_id', $buyer->id)
                                ->where('product_id', $request->product_id)
                                ->first();

        if ($wishlistItem) {
            return response()->json([
                'success' => false,
                'message' => 'Product is already in the wishlist'
            ], 400);
        }

        // Add product to wishlist
        Wishlist::create([
            'product_id' => $request->product_id,
            'buyer_id' => $buyer->id
        ]);

        // Update total_products count
        $totalProducts = Wishlist::where('buyer_id', $buyer->id)->count();
        Wishlist::where('buyer_id', $buyer->id)->update(['total_products' => $totalProducts]);

        return response()->json([
            'success' => true,
            'message' => 'Product added to wishlist',
            'total_products' => $totalProducts
        ]);
    }

    /**
     * Remove a product from the wishlist and update the total count.
     */
    public function destroy($id, Request $request)
    {
        $buyer = $request->user; // Get authenticated buyer

        $wishlistItem = Wishlist::where('buyer_id', $buyer->id)
                                ->where('product_id', $id)
                                ->first();

        if (!$wishlistItem) {
            return response()->json([
                'success' => false,
                'message' => 'Wishlist item not found'
            ], 404);
        }

        // Delete wishlist item
        $wishlistItem->delete();

        // Update total_products count
        $totalProducts = Wishlist::where('buyer_id', $buyer->id)->count();
        Wishlist::where('buyer_id', $buyer->id)->update(['total_products' => $totalProducts]);

        return response()->json([
            'success' => true,
            'message' => 'Product removed from wishlist',
            'total_products' => $totalProducts
        ]);
    }
}
