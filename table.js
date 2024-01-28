const mysql = require('mysql');

// Create a connection to the database
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'testing'
});

// Connect to the database
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database');

    // SQL query to create a table
   var sql="CREATE TABLE userData(userName varchar(255), emailID varchar(255), phoneNo int(11), password varchar(255), dateTime date)"  ;
   con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
});