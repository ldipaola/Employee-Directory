import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';


function SearchFilter(props) {
  let employeeTitle = [];
  for (const iterator of props.employees) {
    if (employeeTitle.includes(iterator.title)){
      continue;
    } else {
      employeeTitle.push(iterator.title);
    }
  }


  const options = employeeTitle.map((option) => 
    <option>{option}</option>);
  

  const arrowRender = () =>{
      if (props.sortButtonValue === "Descending") {
         return <FaArrowDown />
        }
      else if (props.sortButtonValue === "Ascending") {
        return <FaArrowUp />
      }
    }


    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Form.Group className="mb-0"  controlId="occupation-select">
      <Form.Control as="select" onChange={props.handleOccupationChange} value={props.occupationValue}>
      <option value="">-- Title --</option>
      {options}
    </Form.Control>
    </Form.Group>
    <Button onClick={props.onClick} style={{marginLeft: "1em"}} variant="primary">{props.sortButtonValue} {arrowRender()}</Button>{' '}
    </Nav>
    <Form inline>
    <Form.Control className="mr-sm-2" type="text" placeholder="Search.." onChange={props.handleSearchonChange} value={props.value} />
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default SearchFilter
