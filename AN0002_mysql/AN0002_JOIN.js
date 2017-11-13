var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vandana",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, product.name AS favorite FROM users left join product ON users.name = product.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});