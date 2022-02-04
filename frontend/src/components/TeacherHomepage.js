// done
import React from "react";
import logo1 from "../images/logo1.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ExamDetails from "./ExamDetails";
import PastExamDetails from "./PastExamDetails";
import "../css/main.css";
const TeacherHomepage = (props) => {
  const { state } = useLocation();
  const { email, id, user_name } = state;
  const [load, setload] = useState(false);
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  console.log(id);
  useEffect(() => {
    async function fetchteacherexam() {
      let response = await fetch(
        "http://127.0.0.1:8000/teacher/examdetails/" + id
      );
      let response1 = await fetch(
        "http://127.0.0.1:8000/teacher/examdetailspast/" + id
      );
      let data = await response.json();
      let data1 = await response1.json();
      setdata(data);
      setdata1(data1);
      setload(true);
    }
    fetchteacherexam();
  }, [id]);
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
        

        <Link
          className="nav-link mx-10"
          to="/studentlist"
          state={{ email: email, id: id, user_name: user_name }}
        >
          Your students
        </Link>
        <Link
          className="nav-link mx-10"
          to="/addexam "
          state={{ email: email, id: id, user_name: user_name }}
        >
          Host Exam
        </Link>
       
        <Link to="/teacherlogin"  class="btn btn-outline-dark " role="button" aria-pressed="true" style={{ width: "11rem" }} >Logout</Link>
      </nav>
      <div className="abcd5" style={{marginLeft:"40px"}}>
        <div className="tushar" style={{width:"40cm" , marginTop:"130px", marginRight:"120px"}}>
          <div className='card border-danger mb-3' >
          <div class="card-title"><h2>Exams Schedule</h2></div>
          <div className="card-body px-2 py-2" style={{ backgroundColor: "#fff2f1" }}>
           
            <div className="row">
              <div className="col-sm-1">
                <label htmlFor="staticEmail2" className="visually-hidden">
                  Subject
                </label>
              </div>
              <div className="col-sm-1">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Year 
                </label>
              </div>
              <div className="col-sm-2">
                <label htmlFor="inputPassword2" className="visually-hidden">
                 Branch
                </label>
              </div>
              <div className="col-sm-2">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Date
                </label>
              </div>
              <div className="col-sm-2">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Start Time
                </label>
              </div>
              </div>
            </div>
           
            {load && data.length > 0 ? (
              data.map((element) => (
                <ExamDetails
                  key={element.id}
                  email={email}
                  setload={setload}
                  showalert={props.showalert}
                  element={element}
                />
              ))
            ) : (
              <p></p>
            )}
          </div>
          <hr />
          <div class="card border-danger mb-3">
            <div class="card-title"><h2>Exam History</h2></div>
            <div className="card-body px-2 py-2 " style={{ backgroundColor: "#fff2f1" }}>
             
              <div className="row">
                <div className="col-sm-2">
                  <label htmlFor="staticEmail2" className="visually-hidden">
                    Subject
                  </label>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="inputPassword2" className="visually-hidden">
                    Year 
                  </label>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="inputPassword2" className="visually-hidden">
                     Branch
                  </label>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="inputPassword2" className="visually-hidden">
                    Date 
                  </label>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="inputPassword2" className="visually-hidden">
                    Start Time
                  </label>
                </div>
              </div>
             
              {load && data1.length > 0 ? (
                data1.map((element1) => (
                  <PastExamDetails
                    key={element1.id}
                    setload={setload}
                    showalert={props.showalert}
                    element={element1}
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHomepage;
