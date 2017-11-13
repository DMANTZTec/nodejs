var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'vandana',
    database : 'mydb'

});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    else{
        console.log("database has been connected");
    }
});
var queryString = "INSERT INTO customers (name, address) VALUES ('Company Inc\', 'Highway 37\')";
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    for (var i in rows) {
        console.log('filesname: ', rows[i].insertId);
    }
});
connection.end();