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


const appendContactToSheet = async ({ name, email, message }) => {
    const endpoint = process.env.GOOGLE_SHEET_ENDPOINT;
    if (!endpoint) {
        throw new Error('GOOGLE_SHEET_ENDPOINT is not configured');
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name,
            email,
            message,
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Google Sheets endpoint ${response.status}: ${errorBody}`);
    }
};

const contactController = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        await appendContactToSheet({ name, email, message });
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(502).json({ error: 'Unable to send the message right now.' });
        console.log(error);
    }
};

app.post('/contact', contactController);

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})