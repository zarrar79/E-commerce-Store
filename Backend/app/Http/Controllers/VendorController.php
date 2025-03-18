<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Vendor;
use App\Models\Product;



class VendorController extends Controller
{
    public function dashboard(Request $request) {
        // ✅ Retrieve vendor ID from cookie
        $vendorId = $request->cookie('vendor_id');
    
        if (!$vendorId) {
            return response()->json(['message' => 'Unauthorized',
             'vendorId' => $vendorId
        ], 401);
        }
    
        // ✅ Find vendor and load products
        $vendor = Vendor::with('products')->find($vendorId);
    
        if (!$vendor) {
            return response()->json(['message' => 'Vendor not found'], 404);
        }
    
        $totalSales = 0;
        $totalProfit = 0;
        $productSales = [];
    
        foreach ($vendor->products as $product) {
            // ✅ Ensure total_sales is numeric
            $salesCount = is_numeric($product->total_sales) ? $product->total_sales : 0;
            $productSales[$product->id] = $salesCount;
    
            // ✅ Calculate total sales
            $totalSales += $salesCount * $product->price;
    
            // ✅ Calculate total profit (avoid null cost_price)
            $costPrice = $product->cost_price ?? 0;
            $profit = $salesCount * ($product->price - $costPrice);
            $totalProfit += $profit;
        }
    
        // ✅ Sort top-selling products
        arsort($productSales);
        $topSellingProducts = collect($vendor->products)
            ->filter(fn($product) => isset($productSales[$product->id]))
            ->sortByDesc(fn($product) => $productSales[$product->id])
            ->take(5)
            ->values();
    
        return response()->json([
            'total_sales' => $totalSales,
            'total_profit' => $totalProfit,
            'top_selling_products' => $topSellingProducts,
            'productSales' => $productSales,
        ]);
    }
    

public function addProduct(Request $request)
{
    $vendor = $request->user;

    $request->validate([
        'name' => 'required|string|max:255',
        'rating' => 'numeric|min:0|max:5',
        'price' => 'required|numeric|min:0',
        'colors' => 'array',
        'size' => 'nullable|string|max:20',
        'count' => 'required|integer|min:1',
        'total_sales' => 'integer|min:0',
        'offer' => 'nullable|numeric|min:0|max:100',
        'on_sale' => 'boolean',
        'new_arrival' => 'boolean',
        'category' => 'required|string|max:255',
        'image' => 'nullable|image|max:2048'
    ]);

    // Store the product
    $product = new Product([
        'name' => $request->name,
        'price' => $request->price,
        'colors' => json_encode($request->colors),
        'size' => $request->size,
        'count' => $request->count,
        'offer' => $request->offer,
        'on_sale' => $request->on_sale,
        'new_arrival' => $request->new_arrival,
        'category' => $request->category,
        'image' => $request->image ? $request->file('image')->store('products', 'public') : null,
        'vendor_id' => $vendor->id // ✅ Assigning vendor ID from token auth
    ]);
    
    $product->save();

    return response()->json([
        'success' => true,
        'message' => 'Product added successfully!',
        'product' => $product
    ], 201);
}


public function deleteProduct(Request $request,$id)
{
    // Get the authenticated vendor
    $vendor = $request->user;

    // First, find the product by ID
    $product = Product::find($id);
    
    // Check if the product exists and belongs to the authenticated vendor
    if (!$product || $product->vendor_id !== $vendor->id) {
        return response()->json([
            'success' => false,
            'message' => 'Product not found or you do not have permission to access this product.',
        ], 404);
    }

    // Delete the product
    $product->delete();

    return response()->json([
        'success' => true,
        'message' => 'Product deleted successfully!',
    ], 200);
}

public function getProduct(Request $request, $id){
    $product = Product::where('id', $id)
                      ->where('vendor_id', $request->user->id)
                      ->first(); // Get a single record

    if (!$product) {
        return response()->json([
            'success' => false,
            'message' => 'Product not found or does not belong to this vendor'
        ], 404);
    }

    return response()->json([
        'success' => true,
        'product' => $product
    ]);
}

public function updateProduct(Request $request, $id)
{
    // Validate input
    $request->validate([
        'name' => 'sometimes|string|max:255',
        'price' => 'sometimes|numeric|min:0',
        'colors' => 'sometimes|array',
        'size' => 'sometimes|string|nullable',
        'count' => 'sometimes|integer|min:0',
        'offer' => 'sometimes|numeric|min:0',
        'on_sale' => 'sometimes|boolean',
        'new_arrival' => 'sometimes|boolean',
        'category' => 'sometimes|string|max:255',
        'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Find product and ensure it belongs to the vendor
    $product = Product::where('id', $id)
                      ->where('vendor_id', $request->user->id)
                      ->first();

    if (!$product) {
        return response()->json([
            'success' => false,
            'message' => 'Product not found or does not belong to this vendor'
        ], 404);
    }

    // Handle optional image upload
    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('product_images', 'public');
        $product->image = $imagePath;
    }

    // Update product details
    $product->update($request->only([
        'name', 'price', 'colors', 'size', 'count', 'offer', 'on_sale', 'new_arrival', 'category'
    ]));

    return response()->json([
        'success' => true,
        'message' => 'Product updated successfully',
        'product' => $product
    ]);
}

  

}
