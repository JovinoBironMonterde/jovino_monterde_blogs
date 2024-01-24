// page/api/like.js
import connectDb from '../../database/connect_db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch likes count
    const connection = await connectDb();
    const [rows] = await connection.query('SELECT COUNT(*) AS likesCount FROM like_table');
    
    const likesCount = rows[0].likesCount;
    res.status(200).json({ likesCount });
  } else if (req.method === 'POST') {
    // Insert a new like
    const connection = await connectDb();
    await connection.query('INSERT INTO like_table (userpost, email) VALUES (?, ?)', ['Liked', 'example@email.com']);
    const [rows] = await connection.query('SELECT COUNT(*) AS likesCount FROM like_table');
    const likesCount = rows[0].likesCount;
    res.status(200).json({ likesCount });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
