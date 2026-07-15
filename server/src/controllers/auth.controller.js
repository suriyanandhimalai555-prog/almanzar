import pool from '../config/db.js';
import bcrypt from 'bcrypt';

// Existing Registration Logic
export const registerDistributor = async (req, res) => {
    const { companyName, email, password } = req.body;

    try {
        // 1. Check if distributor already exists
        const userCheck = await pool.query('SELECT * FROM distributors WHERE email = $1', [email]);
        
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Distributor with this email already exists.' });
        }

        // 2. Hash the password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Insert new distributor
        const insertQuery = `
            INSERT INTO distributors (company_name, email, password) 
            VALUES ($1, $2, $3) RETURNING id, company_name, email
        `;
        const newDistributor = await pool.query(insertQuery, [companyName, email, hashedPassword]);

        res.status(201).json({
            message: 'Distributor registered successfully!',
            distributor: newDistributor.rows[0]
        });

    } catch (error) {
        console.error('Registration Error:', error.message);
        res.status(500).json({ message: 'Server error during registration.' });
    }
};

// New Login Logic
export const loginDistributor = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find user by email
        const userCheck = await pool.query('SELECT * FROM distributors WHERE email = $1', [email]);
        
        if (userCheck.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const user = userCheck.rows[0];

        // 2. Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // 3. Success - Return minimal user info
        res.status(200).json({ 
            message: 'Login successful!', 
            distributorId: user.id,
            companyName: user.company_name 
        });

    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ message: 'Server error during login.' });
    }
};