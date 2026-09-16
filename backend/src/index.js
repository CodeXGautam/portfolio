import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = Number(process.env.PORT) || 10000;
const allowedOrigins = [
    'http://localhost:3000',
    'https://portfolio-6m89.onrender.com',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    exposedHeaders: ['set-cookie']
}));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'set-cookie');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})

import nodemailer from 'nodemailer';

const sendContactEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 30000,
    });

    await transporter.verify();
    console.log('SMTP connection successful');

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER_RECEIVER,
        replyTo: email,
        subject: `Portfolio Contact Form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
};

const contactController = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        await sendContactEmail({ name, email, message });
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(502).json({ error: 'Unable to send the message right now.' });
        console.log(error);
    }
};

app.post('/contact', contactController);