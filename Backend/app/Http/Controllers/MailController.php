<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestMail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Validate the request data
        $request->validate([
            'email' => 'required|email',  // Sender Email (from frontend)
            'message' => 'required',
        ]);

        $data = [
            'from_email' => $request->email,  // Sender Email from frontend
            'message' => $request->message,
        ];

        try {
            // Send email to a fixed recipient (static "To" email)
            Mail::to('shahzarrar79@gmail.com')->send(new TestMail($data));

            return response()->json([
                'success' => true,
                'message' => 'Email sent successfully!',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send email',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
