import { Link } from 'react-router-dom'
import logo1 from "../images/logo1.png";
import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import StudentListDiv from './StudentListDiv';
const StudentsList = (props) => {
    const { state } = useLocation();
    const { email, id, user_name } = state;
    const [load, setload] = useState(false);
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fetchList() {
            let response = await fetch('http://127.0.0.1:8000/teacher/studentlistadded/')
            let data = await response.json();
            setdata(data);
            console.log(data);
            setload(true);
        }
        fetchList();
    }, [email,load])


    return (

        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
             <img src={logo1} width="30" height="30" alt=""></img>
            </li>
            <li className="nav-item active">
              {" "}
              <p>
               {<h4>Online Examination Portal</h4> }  
              </p>
            </li>
          </ul>
          <Link className="nav-link mx-10" to="/addexam" state={{email:email,id:id,user_name:user_name}}>Host Exam</Link>
            <Link className="nav-link" to="/teacherhomepage" state={{email:email,id:id,user_name:user_name}}>Back</Link>
            
        </nav>
            </div>
            <div className='main' >
            <div className="container">
                <p className="my-3"><h4>Student List</h4></p>
                <div className="row my-3" style={{ backgroundColor: "#fff2f1"}}>
                    <div className="col-sm-2" >
                        <label className="visually-hidden">Name</label>

                    </div>
                    <div className="col-sm-4">
                        <label className="visually-hidden">Email</label>

                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden">Year</label>

                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden">Stream</label>

                    </div>
                </div>
                {

                    load ? data.map((element) => (
                        <StudentListDiv key={element.id} setload={setload} showalert={props.showalert}  element={element} />
                    )
                    )

                        : <p></p>
                }
            </div>
            </div>
        </>
    )
}

export default StudentsList
