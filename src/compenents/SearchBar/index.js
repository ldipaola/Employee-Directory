import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchBar(props) {
    return (
        <div>
            <Form.Group>
            <Form.Control className="search" size="lg" type="text" placeholder="Search.." onChange={props.onChange} value={props.value} /> 
            </Form.Group>
        </div>
    )
}

export default SearchBar
