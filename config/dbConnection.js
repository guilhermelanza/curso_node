var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'password',
		database : 'portal_noticias',
		port : 3306
	});
}

module.exports = function() {
	return connMySQL;
}