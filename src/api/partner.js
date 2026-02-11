const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { business_name, contact_person, email, phone, business_type, location, details } = req.body;

    // Email transporter configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'pravaahya@gmail.com',
        subject: `Partnership Inquiry: ${business_name}`,
        html: `
            <h2>New Partnership Inquiry</h2>
            <p><strong>Business Name:</strong> ${business_name}</p>
            <p><strong>Contact Person:</strong> ${contact_person}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Business Type:</strong> ${business_type}</p>
            <p><strong>Location:</strong> ${location || 'N/A'}</p>
            <p><strong>Details:</strong></p>
            <p>${details || 'N/A'}</p>
            <hr>
            <p><em>Sent from Pravaahya Partner Form</em></p>
        `,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Partnership inquiry sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
};
