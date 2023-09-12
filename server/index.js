const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sms'
});

connection.connect((err) => {
    if (err) console.log(err)
    else
        console.log('Connected')
})

const login = require('./routes/login')
const attend = require('./routes/attendance')
const signup = require('./routes/signup')
const student = require('./routes/student')

app.use('/', login)
app.use('/', attend)
app.use('/', signup)
app.use('/', student)

app.listen(4000, ()=>{console.log("Server connected!")});