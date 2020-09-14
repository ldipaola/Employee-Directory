import React from 'react'
import Form from 'react-bootstrap/Form'

export default function DropDown(props) {
    const options = props.employees.map((option) => 
    <option>{option.occupation}</option>
    );
    return (
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select" onChange={props.onChange} value={props.value}>
      <option></option>
      {options}
    </Form.Control>
    </Form.Group>
    )
}
