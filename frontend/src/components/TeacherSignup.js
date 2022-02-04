import React from 'react'
import '../css/main.css'
import logo1 from "../images/logo1.png";
import logo3 from "../images/logo3.png";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
const TeacherSignup = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = useState({ name: "", email: "", collegecode: "", password: "", });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        function ValidateEmail(mail) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return (true)
            }
            props.showalert("You have entered an invalid email address!","danger")
            return (false)
        }
        if (formData.password.length >= 0 && formData.collegecode === "000000" && formData.name.length >= 3 && ValidateEmail(formData.email)){
          console.log(formData)  
          const signupdata = async () => {
                const was=await fetch('http://127.0.0.1:8000/auth/create/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: formData.name,
                        first_name:formData.name,
                        email: formData.email,
                        password: formData.password,
                        about: formData.collegecode,
                        is_staff:true ,
                        is_active:true
                    })
                })
                props.showalert("Signup successful","success");
                history('/teacherlogin');
            }
            signupdata();
        }
        

    };


    return (
        <>


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
        
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-primary" to="/login">
                Student
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-primary" to="/teacherlogin">
                Teacher
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div class="card d-flex mx-auto my-5">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12 c1 p-5">
                  <div class="row mb-5 m-3">
                    {" "}
                    <img src={logo1} width="70vw" height="60vh" alt=""></img>{" "}
                  </div>{" "}
                  <img src={logo3} width="200vw"height="210vh" class="mx-auto d-flex" alt="Teacher"></img>
                  <div class="row justify-content-center">
                    <div class="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 class="wlcm">Teacher Signup</h1>{" "}
                      <span class="sp1">
                        {" "}
                        <span class="px-3 bg-danger rounded-pill"></span>{" "}
                        <span class="ml-2 px-1 rounded-circle"></span>{" "}
                        <span class="ml-2 px-1 rounded-circle"></span>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">

                 <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name :</label>
                        <input type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email Address :</label>
                        <input type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="email" placeholder="Enter e-mail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">College Code :</label>
                        <input type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="collegecode" placeholder="Enter your college code" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password :</label>
                        <input type="password" className="form-control" onChange={handleChange} name="password" placeholder="Password" />
                        <small id="emailHelp" className="form-text text-muted">Password must be alphanumeric and atleast 8 letters long</small>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" onClick={handleSubmit} className="btn btn-danger" style={{width:"10rem"}}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default TeacherSignup
