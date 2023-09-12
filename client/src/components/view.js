import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const View = () => {
    const [value, setValue] = useState([]);
    const [att, setAtt] = useState([]);

    const navigate = useNavigate();

    const Rollview = window.localStorage.getItem("rollview")

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/view/${Rollview}`);
                setValue(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllStudents();

    }, []);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const resAtt = await axios.get(`http://localhost:4000/attview/${Rollview}`)
                setAtt(resAtt.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAttendance();

    }, []);

    console.log(value);

    /* const handleDelete = async (rollno) => {
       try {
         await axios.delete(`http://localhost:8000/delete/:rollno`);
         window.location.reload()
       } catch (err) {
         console.log(err);
       }
     };*/


    return (
        <div className="container mtp">
            <h1 style={{ fontWeight: 400 }}>Welcome</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <div className="student">
                                {value.map((student) => (
                                    <div key={student.rollno} className="student">
                                        ------------------------------------------
                                        <p>Roll No: {student.rollno}</p>
                                        <p>Student Name: {student.sname}</p>
                                        <p>DOB: {student.dob.slice(0, 10)}</p>
                                        <p>Email: {student.email}</p>
                                        <p>Course Id: {student.cid}</p>
                                        <p>Phone Number: {student.pno}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {
                                    att.map((attendance) => (
                                        <div key={attendance.studentid} className="attendance">
                                            <p>Attendance: {attendance.attend}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <button className="btn btn-primary mx-2" onClick={() => {
                                    navigate('/edit');
                                    window.localStorage.setItem("rolledit", item.rollno)
                                }}><CreateIcon /></button>
                                {/* <button className="btn btn-danger"><DeleteOutlineIcon /></button> */}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default View

// onClick={navigate(`/edit`)}