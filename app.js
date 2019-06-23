const faker = require('faker');
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'join_us',
    password: 'root'
});
connection.connect();

const q = 'SELECT * from users';
connection.query(q, function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();
