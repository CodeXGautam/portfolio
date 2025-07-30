import express from 'express';

const app = express();

const PORT = 4000; 

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})

import nodemailer from 'nodemailer';

const contactController = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        // Configure your transporter (use environment variables for real projects)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'YOUR_EMAIL@gmail.com', // replace with your email
                pass: 'YOUR_APP_PASSWORD' // replace with your app password
            }
        });
        const mailOptions = {
            from: email,
            to: 'YOUR_EMAIL@gmail.com', // replace with your email
            subject: `Portfolio Contact Form: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message.' });
    }
};

app.post('/contact', contactController);