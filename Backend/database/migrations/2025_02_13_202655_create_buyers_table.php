<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('buyers', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade'); // FK to products
            $table->string('name'); // Buyer's name
            //email
            $table->string('email')->unique(); // Buyer's email
            $table->string('phone_number')->unique(); // Buyer's phone number
            //password
            $table->string('password'); // Buyer's password
            $table->text('review')->nullable(); // Buyer's review
            $table->boolean('add_to_cart')->default(false); // If added to cart
            $table->boolean('add_to_wishlist')->default(false); // If added to wishlist
            $table->timestamps(); // Created_at & Updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buyers');
    }
};