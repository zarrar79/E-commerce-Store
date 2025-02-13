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
        Schema::create('vendors', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('name'); // Vendor name
            $table->integer('total_sales')->default(0); // Total sales
            //password should not null
            $table->string('password')->nullable()->FALSE;
            // email
            $table->string('email')->unique()->nullable()->FALSE;

            $table->decimal('total_profit', 10, 2)->default(0.00); // Total profit
            $table->foreignId('top_selling')->nullable()->constrained('products')->onDelete('set null'); // FK to top-selling product
            $table->timestamps(); // Created_at & Updated_at
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('vendor_id')->nullable()->constrained('vendors')->onDelete('cascade'); // FK to vendor
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['vendor_id']);
            $table->dropColumn('vendor_id');
        });

        Schema::dropIfExists('vendors');
    }
};
