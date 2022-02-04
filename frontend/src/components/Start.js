import React from "react";
import { Link } from "react-router-dom";
import "../css/start.css";


const Start = () => {
  return (
    <>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
      <br></br>

      <h1 style={{color:"whitesmoke"}}> Online Examination Portal</h1>
      <div class="start">
        <div class="grid-anim">
          <div class="box first">
            <p>
            <h3>Cloud-based System</h3>
            End-to-end online exam solution that is hosted on the cloud so you don’t 
            have to worry about legacy software systems.

            </p>
          </div>

           <div class="box second">
            <p>
              <h3>Anti-Cheating Technology</h3>

              Proctors can block navigation and disable keyboard 
              shortcuts to conduct a cheating free online exam
            </p>
          </div>

          <div class="box third">
            <p>
              <h3>Exam Configuring Tools</h3>

              Upload bulk questions, randomize question sequences, 
              and even configure the result publishing date with just a few clicks.

            </p>
          </div> 
        </div>
      </div>
      <br></br>
      <div class="start">
        <div class="grid-anim">
          <div class="box first">
            <p>
            <h3>Interactive Interface</h3>
            Easy to grasp quickly. All yteachers and examiners can start 
            creating exams and by completing a series of  synchronized steps with a few clicks.
            </p>
          </div>

           <div class="box second">
            <p>
              <h3>Exam Reporting System</h3>

              Get reports for your exams including scorecards, 
              computational analysis, and detailed analytics on all the candidates. 
              
            </p>
          </div>

          <div class="box third">
            <p>
              <h3>Exam Day Notifications</h3>

              Email integration available for communication 
              with examinees that allows to share key updates and notifications.

            </p>
          </div> 
        </div>
      </div>

     
    </>
  );
};
export default Start;
