import React, { useState } from 'react'
import "./styles/signup.css"
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState(null)
  const signUser = async () => {
    await Axios.post('http://localhost:4000/signup', { username: username, password: password }).then(() => { console.log("Signed up") });
    navigate("/login");
  }

  const goHome = () => {
    navigate("/")
  }

  return (
    <div class="login">
      <h1>SIGN UP</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-cont" id="exampleInputEmail1" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} required />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" class="form-cont" id="exampleInputPassword1" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
      </div>
      <div class="sub">
        <button type="submit" class="btn btn-primary" onClick={signUser}>Signup</button>
      </div>
    </div>
  )
}

export default Signup

