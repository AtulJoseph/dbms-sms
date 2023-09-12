import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    rollno: "",
    sname: "",
    dob: "",
    email: "",
    cid: "",
    pno: ""
  });
  
  const [error, setError] = useState(null)
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/add", inputs);
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
          <label for="rollno">ID</label>
          <input type="number" onChange={handleChange} name="rollno" className="form-control" placeholder="Enter id" />

        </div>

        <div class="form-group">
          <label for="sname">Student Name</label>
          <input type="text" onChange={handleChange} name="sname" class="form-control" placeholder="Enter name" />

        </div>

        <div class="form-group">
          <label for="dob">DOB</label>
          <input type="date" onChange={handleChange} name="dob" class="form-control" placeholder="Enter dob" />

        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="string" onChange={handleChange} name="email" class="form-control" placeholder="Enter email" />

        </div>

        <div class="form-group">
          <label for="cid">Course ID</label>
          <input type="string" onChange={handleChange} name="cid" class="form-control" placeholder="Enter course id" />

        </div>

        <div class="form-group">
          <label for="pno">Phone No:</label>
          <input type="number" onChange={handleChange} name="pno" class="form-control" placeholder="Enter phone no:" />

        </div>

        <button type="submit" class="btn btn-primary" onClick={handleClick} >Submit</button>
        {error && "Something went wrong!"}
      </form>
    </div>
  )
}

export default Register
