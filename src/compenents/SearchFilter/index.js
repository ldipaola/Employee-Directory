import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

function SearchFilter(props) {
  const options = props.employees.map((option) => 
    <option>{option.occupation}</option>);


    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Form.Group className="mb-0"  controlId="exampleForm.ControlSelect1">
      <Form.Control as="select" onChange={props.handleOccupationChange} value={props.occupationValue}>
      <option value="">-- Occupation --</option>
      {options}
    </Form.Control>
    </Form.Group>
    </Nav>
    <Form inline>
    <Form.Control className="mr-sm-2" type="text" placeholder="Search.." onChange={props.handleSearchonChange} value={props.value} />
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default SearchFilter
