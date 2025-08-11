// npm install express mysql2

const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// MySQL connection config


// MySQL connection config
const dbConfig = {
  host: 'localhost',
  user: 'test1',
  password: 'Test1@321',
  database: 'test1'
};


app.get('/', (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      res.send(`
        <html>
          <head>
            <title>MySQL Status</title>
            <style>
              body { background: #1a1a1a; color: white; font-family: Arial, sans-serif; text-align: center; padding-top: 100px; }
              h1 { font-size: 3em; color: #ff4d4d; }
              .error-details { color: #ff9999; margin-top: 20px; }
            </style>
          </head>
          <body>
            <h1>DHANG SE CONFIGURATION DAL NA BE</h1>
            <p class="error-details">${err.message}</p>
          </body>
        </html>
      `);
    } else {
      res.send(`
        <html>
          <head>
            <title>MySQL Status</title>
            <style>
              body { background: linear-gradient(to right, #00b09b, #96c93d); color: white; font-family: Arial, sans-serif; text-align: center; padding-top: 100px; }
              h1 { font-size: 3em; }
              p { font-size: 1.2em; margin-top: 20px; }
            </style>
          </head>
          <body>
            <h1>MySQL Database Connected Successfully</h1>
            <p>Everything is working perfectly 🚀</p>
          </body>
        </html>
      `);
      connection.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});