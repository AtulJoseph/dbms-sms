import { useState } from "react"
import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const Edit = () => {

  const [inputs, setInputs] = useState({
    rollno:"",
    sname:"",
    dob:"",
    email:"",
    cid:"",
    pno:""
  });
  const rolledit = window.localStorage.getItem("rolledit")

  const [error, setError] = useState(null)
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value})
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/edit/${rolledit}`, inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data)
    }
  };

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="id">Roll no:</label>
          <input type="number" value={inputs.rollno} onChange={handleChange} name="rollno" class="form-control" placeholder="Enter roll no:" />
        </div>
        <div class="form-group">
          <label for="name">Student Name</label>
          <input type="text" value={inputs.sname} onChange={handleChange} name="sname" class="form-control" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="dob">DOB</label>
          <input type="date" value={inputs.dob} onChange={handleChange} name="dob" class="form-control" placeholder="Enter dob" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="string" value={inputs.email} onChange={handleChange} name="email" class="form-control" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="courseid">Course ID</label>
          <input type="string" value={inputs.cid} onChange={handleChange} name="cid" class="form-control" placeholder="Enter course id" />
        </div>
        <div class="form-group">
          <label for="phonenumber">Phone No:</label>
          <input type="number" value={inputs.pno} onChange={handleChange} name="pno" class="form-control" placeholder="Enter phone number" />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Update</button>
      </form>
    </div>
  )
}

export default Edit
