import { AdminEmailTemplate, UserEmailTemplate } from '@/components/email-templates';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'mukherjeeshubham18@gmail.com';

export async function POST(req: NextRequest) {
    if (!process.env.RESEND_API_KEY) {
        console.error("❌ Debug: Missing RESEND_API_KEY");
        return NextResponse.json({ error: 'Resend API Key is missing. Please restart the server.' }, { status: 500 });
    }
    console.log("✅ Debug: API Key found");

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await req.json();
        console.log("✅ Debug: Request Body:", body);
        const { name, email, message } = body;

        if (!name || !email || !message) {
            console.error("❌ Debug: Missing fields", { name, email, message });
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Send notification to ADMIN
        console.log("⏳ Debug: Sending admin email...");
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [ADMIN_EMAIL],
            subject: `New Message from ${name}`,
            react: AdminEmailTemplate({ name, email, message }) as React.ReactElement,
        });

        if (adminError) {
            console.error('❌ Debug: Admin email error:', adminError);
            return NextResponse.json({
                error: adminError.message,
            }, { status: 500 });
        }
        console.log("✅ Debug: Admin email sent", adminData);

        // 2. Send confirmation to USER
        console.log("⏳ Debug: Sending user email...");
        try {
            await resend.emails.send({
                from: 'Shubham Mukherjee <onboarding@resend.dev>',
                to: [email],
                subject: 'Message Received - Shubham Mukherjee',
                react: UserEmailTemplate({ name }) as React.ReactElement,
            });
            console.log("✅ Debug: User email sent");
        } catch (userError) {
            console.warn('⚠️ Debug: User confirmation email failed:', userError);
        }

        return NextResponse.json({ success: true, adminData });
    } catch (error: any) {
        console.error("❌ Debug: Internal Error Catch:", error);
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}