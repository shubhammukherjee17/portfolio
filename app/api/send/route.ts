import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    // Send confirmation email to the user
    await resend.batch.send([{
      from: 'Shubham Mukherjee <contact@shubhammukherjee.in>',
      to: [email.toString()],
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
    }
    ,
    {
        from: `${name} <onboarding@resend.dev>`,
        to: ['mukherjeeshubham18@gmail.com'],
        replyTo: [`${email}`],
        subject: `New message from ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">Thank You for Contacting Me!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>Shubham Mukherjee</p>
        </div>
      `,
    }]);
    // Send email to portfolio owner
    await resend.emails.send({
      from: 'From Portfolio <onboarding@resend.dev>',
      to: ['theshubhammukherjeeai@gmail.com'],
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}