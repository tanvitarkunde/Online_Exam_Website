import React from "react";
import logo1 from "../images/logo1.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ResultDiv from "./ResultDiv";
import { Link } from "react-router-dom";

const ResultsPage = (props) => {
  const { state } = useLocation();
  const { examid, email, id, user_name} = state;
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    async function fetchtresults() {
      let response = await fetch(
        "http://127.0.0.1:8000/teacher/results/" + examid 
      );
      let data = await response.json();
      console.log(data);
      setdata(data);
      setload(true);
    }
    fetchtresults();
  }, [examid]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img src={logo1} width="30" height="30" alt=""></img>
          </li>
          <li className="nav-item active">
            {" "}
            <p>{<h4>Online Examination Portal</h4>}</p>
          </li>
        </ul>
        <Link className="nav-link" to="/teacherhomepage">
          Back
        </Link>
      </nav>


        <div className='main'>
        <div className='container '>
            <div className="row my-3" style={{backgroundColor:" #fff2f1"}}>
                <div className="col-sm-3">
                    <label htmlFor="staticEmail2" className="visually-hidden">ROLL NO </label>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="staticEmail2" className="visually-hidden">NAME </label>
                </div>

                <div className="col-sm-3">
                    <label htmlFor="inputPassword2" className="visually-hidden">MARKS SCORED</label>

                </div>
               
                 <div className="col-sm-3">
                    <label className="visually-hidden">RESULT</label>

                </div>

               
            </div>
            {

                load ? data.map((element) => (
                    <ResultDiv key={element.id} element={element} />
                )
                )

                    : <p>Not Attempted By Anyone</p>
            }

        </div>
        </div>
        </>
       
    )
    };


export default ResultsPage;
