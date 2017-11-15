var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "steven",
  password: "eclipse",
  database: "mydb"
});

var name = '';
var adr = '';
var sql = 'SELECT * FROM customers  LIMIT 5, 2';
con.query(sql,  function (err, result) {
  if (err) throw err;
  console.log(result);
});
