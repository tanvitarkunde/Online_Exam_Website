import React from 'react'
import logo1 from "../images/logo1.png";
import { useState } from 'react';
import '../css/main.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Forgpasemail = (props) => {
    const history = useNavigate();
    const [pass1value, setpass1value] = useState("");
    const [formData, updateFormData] = useState({ email: "" });
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };

    const handleSubmit = (e) => {
        const resetpassworddata = async () => {
            try {
                let response = await fetch('http://127.0.0.1:8000/auth/request-reset-email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "email": formData.email
                    })
                })
                if (response.status === 200) {
                    setpass1value("");
                    setTimeout(() => {
                        history('/');
                    }, 1000);
                    props.showalert("Password reset link is sent to your mail id", "success");
                }
                else {
                    setpass1value("Please enter registered mail id, if not then contact with you staff");
                }
            } catch (err) {
                props.showalert("Some error ocuur try again later", "danger");
            }

        }
        resetpassworddata();
    }
    return (
        <>
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

              <Link className="nav-link text-primary" to="/">
                Home
              </Link>

            </nav>


        <div className='abcd1'>
            
            <div className='for'>
            <h4>Look's like you forgot your password</h4>

                <div className='container '>
                    <div className="form-inline">
                        <input
                            type="email"
                            className="form-control mr-1"
                            aria-describedby="emailHelp"
                            placeholder="Enter registered mail"
                            name='email'
                            onChange={handleChange}
                        />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            {pass1value}
                        </small>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-danger" style={{width:"20rem"}}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgpasemail
