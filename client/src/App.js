import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Login from './components/Login'
import Register from './components/Register';
import Signup from './components/Signup'
import Attendance from './components/Attendance'
import Course from './components/course'
import Edit from './components/edit'
import Home from './components/Home'
import View from './components/view';
import Viewatt from './components/viewatt';



function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Navbar/>}/>
        <Route path ='/Signup' element={<Signup/>}/>
        <Route path ='/Login' element={<Login/>}/>
        <Route path ='/Register' element={<Register/>}/>
        <Route path ='/Attendance' element={<Attendance/>}/>
        <Route path ='/Course' element={<Course/>}/>
        <Route path ='/Edit' element={<Edit/>}/>
        <Route path ='/Home' element={<Home/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path='/Viewatt' element={<Viewatt/>}/>
      </Routes>
    </Router>
   )
}

export default App;