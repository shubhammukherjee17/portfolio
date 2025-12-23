import { AdminEmailTemplate, UserEmailTemplate } from '@/components/email-templates';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'mukherjeeshubham18@gmail.com'; // Your email

export async function POST(req: NextRequest) {
    console.log("API Route Hit");
    console.log("Key available:", !!process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
        console.error("Missing API Key");
        return NextResponse.json({ error: 'Resend API Key is missing. Please restart the server.' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await req.json();
        console.log("Request Body:", body);
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Send notification to YOU (Admin)
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain if you have one, else resend.dev test domain
            to: [ADMIN_EMAIL],
            subject: `New Message from ${name}`,
            react: AdminEmailTemplate({ name, email, message }) as React.ReactElement,
        });

        if (adminError) {
            console.error('Admin email error:', adminError);
            return NextResponse.json({ error: adminError.message }, { status: 500 });
        }

        // 2. Send confirmation to the USER
        try {
            await resend.emails.send({
                from: 'Shubham Mukherjee <onboarding@resend.dev>',
                to: [email],
                subject: 'Message Received - Shubham Mukherjee',
                react: UserEmailTemplate({ name }) as React.ReactElement,
            });
        } catch (userError) {
            console.warn('User confirmation email failed (common on free tier without domain):', userError);
        }

        return NextResponse.json({ success: true, adminData });
    } catch (error) {
        console.error("Internal Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
