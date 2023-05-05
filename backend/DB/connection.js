import mysql2 from 'mysql2'//ES6
const sql = mysql2.createConnection({
    user: "root",
    password: '',
    database: 'week3sat',
    host: '127.0.0.1'//localhost
})


export default sql

