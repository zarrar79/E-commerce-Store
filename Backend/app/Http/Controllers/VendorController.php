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


  public function login(Request $request){

    $vendor = Vendor::where('email', $request->email)->first();
    if($vendor && Hash::check($request->password, $vendor->password)){
        return response()->json(['message' => 'Login Successfull']);
    }
    return response()->json(['message' => 'Invalid Credentials']);
  }

    /**
     * Create a new vendor.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:vendors,email',
            'password' => 'required|string|min:6',
        ]);

        $vendor = Vendor::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Vendor created successfully!',
            'vendor' => [
                'id' => $vendor->id,
                'name' => $vendor->name,
                'email' => $vendor->email,
            ]
        ], 201);
    }

    /**
     * Get a single vendor by ID along with their products.
     */
    public function show()
{
    $vendor = auth()->user(); // Get the authenticated vendor

    if (!$vendor) {
        return response()->json([
            'success' => false,
            'message' => 'Unauthorized. Please log in.'
        ], 401);
    }

    $vendorWithProducts = Vendor::with('products')->find($vendor->id);

    return response()->json([
        'success' => true,
        'vendor' => $vendorWithProducts
    ]);
}

public function addProduct(Request $request)
{
    // Ensure the user is authenticated
    $vendor = auth()->user();
    if (!$vendor) {
        return response()->json([
            'success' => false,
            'message' => 'Unauthorized access. Please log in.'
        ], 401);
    }

    // Validate the request data
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
        'rating' => $request->rating ?? 0,
        'price' => $request->price,
        'colors' => json_encode($request->colors),
        'size' => $request->size,
        'count' => $request->count,
        'total_sales' => $request->total_sales ?? 0,
        'offer' => $request->offer,
        'on_sale' => $request->on_sale,
        'new_arrival' => $request->new_arrival,
        'category' => $request->category,
        'image' => $request->image ? $request->file('image')->store('products', 'public') : null,
        'vendor_id' => $vendor->id
    ]);
    
    $product->save();

    return response()->json([
        'success' => true,
        'message' => 'Product added successfully!',
        'product' => $product
    ], 201);
} 
}
