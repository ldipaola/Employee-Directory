import React from 'react';
import "./style.css";

export default function EmployeeCard(props) {
    return (
        <div className="card">
      <div className="img-container">
        <img className={"image-cards"} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
        </ul>
      </div>
    </div>
    )
}
