import { DB_HOST, DB_NAME, DB_PWD, DB_USER } from '@/env';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;