interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const AdminEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
        <h2 style={{ color: '#00f3ff' }}>New Transmission Received 🚀</h2>
        <p><strong>From:</strong> {name} ({email})</p>
        <hr style={{ borderColor: '#eee', margin: '20px 0' }} />
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        <hr style={{ borderColor: '#eee', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#666' }}>Sent from your Portfolio</p>
    </div>
);

export const UserEmailTemplate: React.FC<Readonly<{ name: string }>> = ({
    name,
}) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
        <h2 style={{ color: '#00f3ff' }}>Transmission Acknowledged</h2>
        <p>Hi {name},</p>
        <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br />Shubham Mukherjee</p>
        <hr style={{ borderColor: '#eee', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#666' }}>Automated confirmation</p>
    </div>
);