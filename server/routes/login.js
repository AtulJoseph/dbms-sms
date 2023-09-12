const express = require('express')
const mysql = require('mysql');
const router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sms'
});

router.post('/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM userlogin WHERE username = ? AND password = ?', [username, password], function(error, results) {
            if (error) throw error;
            else {
                if(results.length==1){
                    res.json("Success")
                    console.log("Hi user")
                }
                else{
                    res.json("Failed")
                    console.log("Invalid credentials")
                }
            }
        });
    } else{
        console.log('Please enter Username and Password!');
    }
});

module.exports = router;