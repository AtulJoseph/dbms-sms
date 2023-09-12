import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



const Viewatt = () => {
    const [value, SetValue] = useState([]);

    useEffect(() => {
      const fetchAttendance = async () => {
        try {
          const res = await axios.get("http://localhost:4000/attview");
          SetValue(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAttendance();
    }, []);
  
    console.log(value);
  
  

  
  return (
    
    <div className="container mtp">
        <h1 style={{ fontWeight: 400 }}>ATTENDANCE DETAILS</h1>
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                
            

                <div className="row">
                    <div className="left_view col-lg-6 col-md-6 col-12">
                        <div className="attendence">
                            {value.map((attendence) => (
                              <div key={attendence.studentid} className="attendance">
                                ------------------------------------------
                                <p>Student_id: {attendence.studentid}</p>
                                <p>Course_id: {attendence.courseid}</p>
                                <p>Attendance % : {attendence.attend}</p>
                                
                               
                                
                                </div>
                              ))}
                            </div>
                    </div>
                  
                    
                </div>

              

            </CardContent>
        </Card>

</div>
)
}

export default Viewatt