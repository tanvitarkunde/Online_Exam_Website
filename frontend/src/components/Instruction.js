import logo1 from "../images/logo1.png";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Instruction = () => {
  const location = useLocation();
  const {
    userid,
    examid,
    minutes,
    starttime,
    endtime,
    passobj,
    totalmarks,
    subname,
  } = location.state;
  let strthrs = parseInt(starttime.slice(0, 2));
  let strtmns = parseInt(starttime.slice(3, 5));
  let endhrs = parseInt(endtime.slice(0, 2));
  let endmn = parseInt(endtime.slice(3, 5));
  let lmn = new Date();
  let nowhr = lmn.getHours();
  let nowmn = lmn.getMinutes();
  if (endhrs - nowhr < 0) {
    console.log("");
  } else if (endhrs - nowhr === 0 && endmn - nowmn < 0) {
    console.log("");
  } else {
    const myvar = setInterval(function () {
      let now = new Date();
      let nowhrs = now.getHours();
      let nowmns = now.getMinutes();
      if (nowhrs - strthrs > 0) {
        try {
          document.getElementById("tfbtn").classList.remove("disabled");
          clearInterval(myvar);
        } catch (error) {
          console.log("");
        }
      } else if (nowhrs - strthrs === 0 && nowmns - strtmns >= 0) {
        try {
          document.getElementById("tfbtn").classList.remove("disabled");
          clearInterval(myvar);
        } catch (error) {
          console.log("");
        }
      }
    }, 5000);
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img src={logo1} width="30" height="30" alt=""></img>
          </li>
          <li className="nav-item active">
            {" "}
            <p>{<h4>Online Examination Portal</h4>}</p>
          </li>
        </ul>
        <Link className="nav-link" to="/studenthomepage">
          Back
        </Link>
      </nav>
      <div
        className="container"
        style={{ backgroundColor: "#fff2f1", marginTop: "100px" }}
      >
        <div className="my-3">
          <div className="my-3">
            <strong>
              {" "}
              <h3>Instructions:</h3>
            </strong>
          </div>
          <p className="my-3">
            {" "}
            Start Time: <strong>{starttime}</strong>
          </p>
          <p className="my-3">
            {" "}
            End Time : <strong>{endtime}</strong>
          </p>
          <ul className="list-group mx-2">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              You must only attempt this exam once.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Any additional attempts should only be used in the event where a
              serious technical issue has occurred and
              <br></br> supporting evidence supporting this will be required.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              You can go to the next question only after saving the options of
              current question.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              You are not permitted to obtain assistance by improper means or
              ask for help from or give help to any other person.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              This examination is made available online at TIME on DATE.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              You will need to be in a quiet space for the duration of your exam
              with no interruptions.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Misconduct action will be taken against you if you breach
              university rules.
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Exam will automatically end after the timer becomes zero.
            </li>
          </ul>
        </div>
        <br />
        <Link
          to="/exampage"
          state={{
            userid: userid,
            examid: examid,
            minutes: minutes,
            passobj: passobj,
            totalmarks: totalmarks,
            subname: subname,
          }}
          className="btn btn-danger active disabled"
          id="tfbtn"
          role="button"
          aria-pressed="true"
        >
          Start Exam
        </Link>
      </div>
    </>
  );
};

export default Instruction;
