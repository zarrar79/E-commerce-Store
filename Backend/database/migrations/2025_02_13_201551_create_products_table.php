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
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('name'); // Product name
            $table->decimal('rating', 2, 1)->default(0); // Rating (e.g., 4.5)
            $table->decimal('price', 10, 2); // Selling price
            $table->decimal('cost_price', 10, 2); // Cost price (new column for profit calculation)
            $table->json('colors')->nullable(); // Colors (stored as JSON array)
            $table->string('size')->nullable(); // Product size
            $table->integer('count'); // Available stock count
            $table->integer('total_sales')->default(0); // Total units sold
            $table->decimal('offer', 5, 2)->nullable(); // Offer percentage (e.g., 10.50 for 10.5%)
            $table->boolean('on_sale')->default(false); // Is the product on sale?
            $table->boolean('new_arrival')->default(false); // Is it a new arrival?
            $table->string('category'); // Product category
            $table->string('image')->nullable(); // Image file path
            $table->timestamps(); // Created_at & Updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
