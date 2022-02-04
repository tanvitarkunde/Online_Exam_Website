import React from "react";
import "../css/main.css";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Studentsignup = (props) => {
  const history = useNavigate();
  const [formData, updateFormData] = useState({
    name: "",
    rollno: "",
    email: "",
    year: "",
    password: "",
    stream: "",
    collegecode: "000000",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    function ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      props.showalert("You have entered an invalid email address!", "danger");
      return false;
    }
    if (
      formData.password.length >= 8 &&
      formData.name.length >= 3 &&
      ValidateEmail(formData.email) &&
      formData.collegecode === "000000"
    ) {
      const signupdata = async () => {
        const was = await fetch("http://127.0.0.1:8000/auth/create/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_name: formData.rollno,
            first_name: formData.name,
            email: formData.email,
            password: formData.password,
            year: formData.year,
            stream: formData.stream,
            is_active: true,
          }),
        });
        props.showalert("Signup successful", "success");
        history("/");
      };
      signupdata();
    }
  };

  return (
    <>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                  <img
                    src={logo2}  width="200vw" height="210vh" class="mx-auto d-flex" alt="Student"></img>
                  <div class="row justify-content-center">
                    <div class="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 class="wlcm">Student Signup</h1>{" "}
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
                <div class="d-flex">
                      <h3 class="font-weight-bold">Sign Up</h3>
                    </div>{" "}
                <div className="form-group">
                  <label>Name :</label>
                  <input type="email" className="form-control"onChange={handleChange} aria-describedby="emailHelp" name="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                  <label>E-mail Address :</label>
                  <input
                    type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="email" placeholder="Enter your e-mail"/>     
                </div>
                <div className="form-group">
                  <label>Class Code :</label>
                  <input type="text" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="collegecode" placeholder="Enter your class code"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" onChange={handleChange} name="password" placeholder="Password"/>
                  <small className="form-text text-muted">
                    Password must be alphanumeric and atleast 8 letters long
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">Roll No :</label>
                  <input type="number" className="form-control" onChange={handleChange}  name="rollno" placeholder="Enter your roll number"/>           
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <select defaultValue={"DEFAULT"} className="custom-select custom-select-sm" name="year" id="year" onChange={handleChange}>
                      <option value="DEFAULT" disabled>
                      Year
                      </option>

                      <option value="FE">FE</option>
                      <option value="SE">SE</option>
                      <option value="TE">TE</option>
                      <option value="BE">BE</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <select defaultValue={"DEFAULT"} className="custom-select custom-select-sm" name="stream" id="stream" onChange={handleChange}>
                      <option value="DEFAULT" disabled>
                      Stream
                      </option>

                      <option value="Computer">Computer</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="IT">IT</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Printing">Printing</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" onClick={handleSubmit} className="btn btn-danger" style={{width:"10rem"}}>
                    Submit
                  </button>
                </div>
              </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentsignup;
