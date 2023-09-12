import React, { useState } from 'react'
import "./styles/login.css"
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState(null)
  const loginUser = async () => {
    await Axios.post('http://localhost:4000/login', { username: username, password: password }).then((res) => { if (res.data === "Success") navigate("/") });
  }

  return (
    <div class="login">
      <h1>LOGIN</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-cont" id="exampleInputEmail1" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} required />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" class="form-cont" id="exampleInputPassword1" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
      </div>
      <button type="submit" class="btn btn-primary" onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login



