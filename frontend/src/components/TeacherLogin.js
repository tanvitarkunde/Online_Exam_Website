import React from 'react'
import '../css/main.css'
import logo1 from "../images/logo1.png";
import logo3 from "../images/logo3.png";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axiosInstance from '../Axios';
import { Link } from 'react-router-dom'
const TeacherLogin = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = useState({ email: "ded", password: "23345" });
    const [ischecked, setischecked] = useState(false);

    const handleChange = (e) => {

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })


    };
    const handleChange1=(e)=> {
        setischecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(ischecked===true)
        {

        const loginandgetdata = async () => {
          console.log(formData)
            try {
                const resp = await axiosInstance.post('token/', {
                    email: formData.email,
                    password: formData.password
                });
                localStorage.setItem('access_token', resp.data.access);
				localStorage.setItem('refresh_token', resp.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                props.showalert("Logged in successfully", "success");
                if(resp.data.isstaff===true){
                history('/teacherhomepage', {
                    state: {
                        email: resp.data.email,
                        id: resp.data.id,user_name: resp.data.user_name
                    }
                });
                }
                else{
                    props.showalert("It seems that you are not a admin","danger");
                }
            } catch (err) {
                props.showalert("Please enter valid credentials", "danger");
            }
        }
        loginandgetdata();
        }
        // else{
        //     props.showalert("Please check the checkbox","danger");
        // }

    };
    

    return (
      <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
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
                  <img src={logo3} width="200vw" height="210vh" class="mx-auto d-flex"
                    alt="Teacher"></img>
                  <div class="row justify-content-center">
                    <div class="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 class="wlcm">Teacher Login</h1>{" "}
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

                <form onsubmit="event.preventDefault()" name="myform" onsubmit="" class="px-5 pb-5">
                    <div class="d-flex">
                      <h3 class="font-weight-bold">Log in</h3>
                    </div>{" "}
                    <input type="email"  id="exampleInputEmail1" onChange={handleChange} aria-describedby="emailHelp" name="email" placeholder="Enter mail-id"></input>{" "}
                    <input type="password" id="exampleInputPassword1" onChange={handleChange} name="password" placeholder="Password"></input>{" "}
                    <span class="ac" id="forgot">
                    <Link to="/forgpassemail" style={{color: '#e0726c'}} >Forgot?</Link><br></br>
                    </span>{" "}
                    <button type="submit" onClick={handleSubmit} className="btn btn-danger" style={{ width: "20rem" }}>Continue</button><br></br><br></br>
                     <div>
                    <h7>Don't have an account? Create a new account</h7>
                    <Link to="/teachersignup" class="btn btn-light" role="button" aria-pressed="true"  style={{ width: "20rem" }} >Register</Link>
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

export default TeacherLogin
