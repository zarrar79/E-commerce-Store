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
            $table->id();
            $table->string('name');
            $table->integer('total_sales')->default(0);
            $table->string('password')->nullable()->FALSE;
            $table->string('email')->unique()->nullable()->FALSE;

            $table->decimal('total_profit', 10, 2)->default(0.00);
            $table->foreignId('top_selling')->nullable()->constrained('products')->onDelete('set null');
            $table->timestamps();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('vendor_id')->nullable()->constrained('vendors')->onDelete('cascade');
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
