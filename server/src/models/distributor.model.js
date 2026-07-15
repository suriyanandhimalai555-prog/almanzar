import pool from '../config/db.js';

const createDistributorTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS distributors (
            id SERIAL PRIMARY KEY,
            company_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        await pool.query(queryText);
        console.log('✅ Distributor table is ready (created if not exists).');
    } catch (error) {
        console.error('❌ Error creating distributor table:', error);
    }
};

export default createDistributorTable;