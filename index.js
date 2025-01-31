import nodemailer from 'nodemailer';

const EMAIL = 'gmail';
const PASSWORD = 'pword';
const RECIPIENT_EMAIL = 'receve gmail';

// Function to send email
async function sendEmail(subject, body) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    const mailOptions = {
        from: EMAIL,
        to: RECIPIENT_EMAIL,
        subject: subject,
        text: body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

setInterval(async () => {
    await sendEmail('Weather Update', "Weather now updated");
    console.log('Weather email sent!');
}, 30000);
