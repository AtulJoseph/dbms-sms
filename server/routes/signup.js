const express = require('express')
const mysql = require('mysql');
const router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sms'
});

router.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query('INSERT into userlogin values (?,?)',[username,password], (error,result) => {
        if (error) throw error
        else 
        res.json(result);
    })
})

module.exports = router;