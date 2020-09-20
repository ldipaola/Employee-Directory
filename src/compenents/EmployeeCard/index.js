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
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
    )
}
