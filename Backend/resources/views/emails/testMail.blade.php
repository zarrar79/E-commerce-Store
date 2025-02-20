@component('mail::message')
# New Message from Contact Form

**From:** {{ $from_email }}

**Message:**
{{ $message }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
