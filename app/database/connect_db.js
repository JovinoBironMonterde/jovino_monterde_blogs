// components/database/connect_db.js
const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jovinomonterdeblog_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

