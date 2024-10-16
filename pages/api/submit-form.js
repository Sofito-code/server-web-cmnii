import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, name, lastName, address, phone, age, gender } = req.body;

    try {
      const connection = await pool.getConnection();
      const [result] = await connection.execute(
        'INSERT INTO users (id, name, lastName, address, phone, age, gender) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id, name, lastName, address, phone, age, gender]
      );
      connection.release();

      res.status(200).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}