import React from "react";
import logo1 from "../images/logo1.png";
import { Link } from "react-router-dom";
import '../css/main.css'
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addexam = (props) => {
    const history=useNavigate();
    const { state } = useLocation();
    const { email, id, user_name } = state;
    console.log(email);
    const [formData, updateFormData] = useState({ subname: "", hoster: id, year: "", stream: "", date: "", starttime: "", endtime: "" });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const addexam = async () => {
            const was = await fetch('http://127.0.0.1:8000/teacher/examhostdata/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subname:formData.subname ,
                    hoster:formData.hoster ,
                    stream:formData.stream,
                    date:formData.date ,
                    year:formData.year,
                    starttime:formData.starttime ,
                    endtime:formData.endtime ,
                })
            })
            let ds=await was.json();
            props.showalert("exam hosted successfully","success");
            const examid=ds.id;
            history('/questions', {
                state: {
                    examid:examid
                }
            });
            
        }
        addexam();
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
                <Link className="nav-link" to="/teacherhomepage" state={{ email: email, id: id, user_name: user_name }}>
                    Back
                </Link>
            </nav>
        <div className="abcd2">
            <div className="tushar" style={{backgroundColor:"#fff2f1",borderColor:"red"}}>
               <div style={{width:"10cm",marginLeft:"20px"}}>
               <h3 >Add Examination</h3>
               </div>
            <div className="container-fluid">
                <form>
                    <div className="form-row my-3">
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt">Subject Name </label>
                            <input

                                className="mx-3 col-lg-5"
                                onChange={handleChange}
                                type="text"
                                id="appttext"
                                name="subname"
                            />
                        </div>
                        <div className="col-md-4 mb-3"   >
                        <label htmlFor="appt">Year: </label>
                            <select defaultValue={'DEFAULT'} className="custom-select custom-select-sm" name="year" id="year" onChange={handleChange} style={{width:"5cm"}}>
                                <option value="DEFAULT" disabled>Choose a Year ...</option>

                                <option value="FE">FE</option>
                                <option value="SE">SE</option>
                                <option value="TE">TE</option>
                                <option value="BE">BE</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-4"  >
                        <label htmlFor="appt">Stream: </label>
                            <select defaultValue={'DEFAULT'} className="custom-select custom-select-sm" name="stream" id="stream" onChange={handleChange} style={{width:"5cm"}}>
                                <option value="DEFAULT" disabled>Choose a Stream..</option>

                                <option value="Computer">Computer</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Civil">Civil</option>
                                <option value="IT">IT</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Printing">Printing</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row my-3">
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt">Start time: </label>
                            <input className="mx-3" onChange={handleChange} type="time"  name="starttime" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt">End time: </label>
                            <input className="mx-3" onChange={handleChange} type="time"  name="endtime" />
                        </div>

                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt">Date: </label>
                            <input className="mx-3" type="date" onChange={handleChange}  name="date" />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-danger my-3" type="submit"  style={{ width: "10rem" }}>
                        Add Exam
                    </button>
                </form>
            </div>
            </div>
            </div>
        </>
    );
};

export default Addexam;
