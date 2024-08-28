import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import userRouter from './routes/user.router.js'; // Ensure this path is correct

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser()); // Use cookie-parser correctly

app.use('/api/v1/users', userRouter);

export { app };
