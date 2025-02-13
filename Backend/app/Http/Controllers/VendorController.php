<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Vendor;



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
}
