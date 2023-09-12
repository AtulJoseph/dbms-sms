const express = require('express')
const mysql = require('mysql');
const router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sms'
});

router.post('/attadd', (req, res) => {
    const studentid = req.body.studentid;
    const courseid = req.body.courseid;
    const attend = req.body.attend;

    connection.query("insert into `attendance` values (?, ?, ?)", [studentid, courseid, attend], (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.json(result)
        }
    })
})

router.get('/attview/:studentid', (req, res) => {
    const studentid = req.params.studentid

    connection.query("select * from `attendance` where studentid=?", studentid, (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.json(result)
        }
    })
})

module.exports = router;