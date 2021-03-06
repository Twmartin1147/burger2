// Pull in required dependencies
var mysql = require('mysql');
var heroku = "https://salty-earth-33347.herokuapp.com/";

// Create the MySQL connection object
var connection;

if (process.env.heroku) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.heroku);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;