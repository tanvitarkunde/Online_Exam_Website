import React from "react";

const ResultDiv = (props) => {
  return (
    <div className="row my-4">
      <div className="col-sm-3">
        <label htmlFor="staticEmail2" className="visually-hidden">
          {props.element.user_name}
        </label>
      </div>
      <div className="col-sm-3">
        <label htmlFor="staticEmail2" className="visually-hidden">
          {props.element.first_name}
        </label>
      </div>
      <div className="col-sm-3">
        <label htmlFor="staticEmail2" className="visually-hidden">
          {props.element.obtained_marks}
        </label>
      </div>
     

      <div className="col-sm-3">
        <label  className="visually-hidden">
        {props.element.result}
        </label>
      </div>

     
    </div>
  );
};

export default ResultDiv;
