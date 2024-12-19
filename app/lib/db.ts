import { Pool } from 'pg';

// Параметри підключення для Neon Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // використовуйте URL з вашого Neon Dashboard
  ssl: {
    rejectUnauthorized: false,
  },
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } finally {
    client.release();
  }
};
