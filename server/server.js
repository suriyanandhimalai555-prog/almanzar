import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import createDistributorTable from './src/models/distributor.model.js';
import authRoutes from './src/routes/auth.routes.js';

dotenv.config();

const app = express();

// 1. UPDATE CORS: Allow both production and local domains explicitly
const allowedOrigins = [
  process.env.FRONTEND_URL, 
  'http://localhost:5173',
  'https://almanzartech.com/'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. INCREASE PAYLOAD LIMITS: Solves the 413 (Request Entity Too Large) error
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Initialize Database Tables
createDistributorTable();

// Routes
app.use('/api/distributor', authRoutes);

// Root path test
app.get("/", (req, res) => {
  res.send("Server running cleanly.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server executing live on port: ${PORT}`);
});