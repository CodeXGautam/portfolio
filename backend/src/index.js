import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 4000; 

app.use(cors({
  origin:['http://localhost:3000'],
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
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER_RECEIVER, // replace with your email
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