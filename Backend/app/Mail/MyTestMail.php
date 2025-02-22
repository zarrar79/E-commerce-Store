<?php
namespace App\Mail;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MyTestMail extends Mailable
{
    use Queueable, SerializesModels;
    
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }
    
    public function envelope(): Envelope
    {
        xdebug_break();

        return new Envelope(
            from: new Address($this->data['from_email'], 'User Inquire'),
            to: [new Address(env('MAIL_TO_ADDRESS'), 'Admin')], 
            subject: $this->data['subject'] ?? 'New Contact Form Submission'
        );
    }
    

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.testMail',
            with: [
                'from_email' => $this->data['from_email'] ?? env('MAIL_FROM_ADDRESS'),
                'message' => $this->data['message'] ?? 'No message provided.',
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
