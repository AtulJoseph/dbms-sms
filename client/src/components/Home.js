import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Axios from 'axios';

const Home = () => {
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const rollDelete = window.localStorage.getItem("rolldelete")
      console.log(rollDelete)
      await Axios.delete(`http://localhost:4000/delete/${rollDelete}`);
      navigate("/Home");
    } catch (err) {
      console.log(err);
      setError(err.response.data)
    }
  };

  const [data, setData] = useState([])
  const viewStudent = async () => {
    await Axios.get('http://localhost:4000/list').then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => console.log(err));

  }
  useEffect(() => {
    viewStudent();
  }, [])
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className='btn btn-primary' onClick={() => { navigate('/Register'); }}>Add data</button>
        </div>


        <table class="table">
          <thead>
            <tr className='table-dark'>
              <th scope="col">Roll No:</th>
              <th scope="col">Student Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Course ID</th>
              <th scope="col">Phone No:</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.rollno}</th>
                  <td>{item.sname}</td>
                  <td>{item.dob.slice(0, 10)}</td>
                  <td>{item.email}</td>
                  <td>{item.cid}</td>
                  <td>{item.pno}</td>
                  <td className='d-flex justify-content-between' >
                    <button className='btn btn-success' onClick={() => { 
                      navigate('/view'); 
                      window.localStorage.setItem("rollview", item.rollno)
                    }}><RemoveRedEyeIcon /></button>
                    <button className='btn btn-primary' onClick={() => {
                      navigate('/edit')
                      window.localStorage.setItem("rolledit", item.rollno)
                    }}><CreateIcon /></button>
                    <button className='btn btn-danger' onClick={(e) => {
                      window.localStorage.setItem("rolldelete", item.rollno)
                      handleClick(e);
                    }}><DeleteOutlineIcon /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>



  )
}
export default Home;
