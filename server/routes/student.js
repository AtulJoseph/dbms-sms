const express = require('express')
const mysql = require('mysql');
const router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sms'
});

router.get('/list', (req, res) => {
    connection.query("select * from `student`", (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.json(result)
        }
    })
})

router.delete("/delete/:rollno", (req, res) => {
    const rollno = req.params.rollno;
    var deletedstudent;
    connection.query("select * from `student` where rollno=?", rollno, (error, result) => {
       deletedstudent=result;
    })
    connection.query("delete from `student` where rollno=?", rollno, (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.json(deletedstudent)
        }
    })
})

router.post('/add', (req, res) => {
    const rollno = req.body.rollno;
    const sname = req.body.sname;
    const email = req.body.email;
    const dob = req.body.dob;
    const pno = req.body.pno;
    const cid = req.body.cid;

    connection.query("insert into `student` values (?, ?, ?, ?, ?, ?)", [rollno, sname, dob, email, cid, pno], (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.json(result)
        }
    })
})

router.post('/edit/:rollno', (req, res) => {
    const rollno = req.params.rollno;
    const rno = req.body.rollno;
    const sname = req.body.sname;
    const email = req.body.email;
    const dob = req.body.dob;
    const pno = req.body.pno;
    const cid = req.body.cid;
    connection.query("update `student` set rollno=?, sname=?, dob=?, email=?, cid=?, pno=?  where rollno=?", [rno, sname, dob, email, cid, pno, rollno], (error, result) => {
        if (error) {
            throw error
        }
        else {
            res.send('Table updated!')
        }
    })
})

router.get('/view/:rollno', (req, res) => {
    const rollno = req.params.rollno;

    connection.query("select * from student where rollno=?", rollno, (error, result) => {
        if (error) {
            throw error
        }
        else {   
            res.json(result)
        }
    })
})

module.exports = router;