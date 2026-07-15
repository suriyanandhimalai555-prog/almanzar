import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import createDistributorTable from './src/models/distributor.model.js';
import authRoutes from './src/routes/auth.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Initialize Database Tables
createDistributorTable();

// Routes
app.use('/api/distributor', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});