import React from 'react'
import { Link } from 'react-router-dom'
const PastExamDetails = (props) => {
    return (
        <div className="row my-3">
                    <div className="col-sm-2">
                        <label htmlFor="staticEmail2" className="visually-hidden">{props.element.subname}</label>

                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="inputPassword2" className="visually-hidden">{props.element.year}</label>

                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="inputPassword2" className="visually-hidden">{props.element.stream}</label>

                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="inputPassword2" className="visually-hidden">{props.element.date} </label>

                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="inputPassword2" className="visually-hidden">{props.element.starttime}</label>

                    </div>
                    <div className="col-sm-2">
                    <Link to="/resultpage" state={{examid:props.element.id}}  className="btn btn-danger" aria-pressed="true">Show results</Link>
                    </div>
                
                <hr />
        </div>
    )
}

export default PastExamDetails
