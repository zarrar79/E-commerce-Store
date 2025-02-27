<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class StripePaymentController extends Controller
{
    public function processPayment()
    {
        Stripe::setApiKey(config('services.stripe.secret'));

    // Example products array (You can get this from your database or cart session)
    $products = [
        ['name' => 'Product A', 'price' => 2000, 'quantity' => 2], // $20.00 each
        ['name' => 'Product B', 'price' => 3500, 'quantity' => 1], // $35.00 each
        ['name' => 'Product C', 'price' => 1500, 'quantity' => 3], // $15.00 each
    ];

    // Convert products array to Stripe's `line_items` format
    $lineItems = [];
    foreach ($products as $product) {
        $lineItems[] = [
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => $product['name'],
                ],
                'unit_amount' => $product['price'], // Price in cents
            ],
            'quantity' => $product['quantity'],
        ];
    }

    // Create Stripe Checkout Session
    $session = Session::create([
        'payment_method_types' => ['card'],
        'line_items' => $lineItems, // Pass multiple products
        'mode' => 'payment',
        'success_url' => route('payment.success'),
        'cancel_url' => route('payment.cancel'),
    ]);
    
    return redirect($session->url); // Redirect user to Stripe payment page
}
}
