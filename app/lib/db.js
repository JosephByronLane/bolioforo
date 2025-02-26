import mysql from 'mysql2/promise';

export async function executeQuery({ query, values = [] }) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_URL?.split('@')[1]?.split(':')[0] || 'db',
      port: parseInt(process.env.DATABASE_URL?.split(':')[3] || '3306', 10),
      database: process.env.DATABASE_URL?.split('/')[3] || 'bolioforo',
      user: process.env.DATABASE_URL?.split('//')[1]?.split(':')[0] || 'bolioforo',
      password: process.env.DATABASE_URL?.split(':')[2]?.split('@')[0] || 'password',
    });

    const [results] = await connection.execute(query, values);
    await connection.end();
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to execute database query');
  }
}