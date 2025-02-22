<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\MyTestMail;

class MailController extends Controller
{

public function sendEmail(Request $request)
{
    $request->validate([
        'email' => 'required|email',  // Sender's email (from frontend)
        'subject' => 'required',
        'message' => 'required',
    ]);

    $data = [
        'from_email' => $request->email,  // User's email
        'subject' => $request->subject,
        'message' => $request->message,
    ];

    try {

        Mail::to(env('MAIL_TO_ADDRESS'))->send(new MyTestMail($data));

        return response()->json([
            'data' => $data,
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
