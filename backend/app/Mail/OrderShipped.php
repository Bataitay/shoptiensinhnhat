<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Order Shipped',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'sendmail',
            with: [
                'name' => $this->data['name'],
                'phone' => $this->data['phone'],
                'address' => $this->data['address'],
                'codeAndSeri' => $this->data['codeAndSeri'],
                'faceValueOfMoney' => $this->data['faceValueOfMoney'],
                'pay_method' => $this->data['pay_method'],
                'total' => $this->data['total'],
                'price' => $this->data['price'],
                'note' => $this->data['note'],
                'date' => Carbon::now('Asia/Ho_Chi_Minh')->format('d-M-Y H:i')
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
