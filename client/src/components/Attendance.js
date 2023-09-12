import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Attendance = () => {
  const [inputs, setInputs] = useState({
    studentid: "",
    courseid: "",
    attend: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/attadd", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="studentid">STUDENT ID</label>
          <input type="number" class="form-control" onChange={handleChange} name="studentid" placeholder="Enter id" />
        </div>
        <div class="form-group">
          <label for="courseid">COURSE ID</label>
          <input type="string" class="form-control" onChange={handleChange} name="courseid" placeholder="Enter course id" />
        </div>
        <div class="form-group">
          <label for="Attendance">ATTENDANCE</label>
          <input type="decimal" class="form-control" onChange={handleChange} name="attend" placeholder="Enter attendance percentage" />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Attendance

