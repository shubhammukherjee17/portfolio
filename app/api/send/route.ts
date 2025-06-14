import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Shubham Mukherjee <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for your message',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">Thank You for Contacting Me!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>Shubham Mukherjee</p>
        </div>
      `,
    });

    // Send notification email to yourself
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['mukherjeeshubham18@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}