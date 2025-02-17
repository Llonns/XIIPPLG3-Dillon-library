const mysql = require('mysql2');

const dbPool = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'dillon300607',
database: 'express_mysql',
});
module.exports = dbPool.promise();