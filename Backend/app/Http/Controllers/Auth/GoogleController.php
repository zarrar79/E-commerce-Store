<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\Buyer;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;

class GoogleController extends Controller
{
    public function redirectToGoogle()
{
    $client = new Client([
        'verify' => false, // Temporarily disable SSL verification
    ]);

    $googleAuthUrl = Socialite::driver('google')
        ->setHttpClient($client) // Set custom Guzzle client
        ->stateless() // Important for APIs
        ->redirect()
        ->getTargetUrl();

    return response()->json([
        'google_auth_url' => $googleAuthUrl
    ]);
}    

    
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();

            $user = Buyer::updateOrCreate([
                'email' => $googleUser->getEmail(),
            ], [
                'name' => $googleUser->getName(),
                'google_id' => (string) $googleUser->getId(),
                'password' => bcrypt('password'),
            ]);
            $token = $user->createToken('GoogleAuthToken')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'message' => 'User authenticated successfully',
                'user' => $user,
                'token' => $token,
                'google_id' => (string) $googleUser->getId(),
                
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Authentication failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
