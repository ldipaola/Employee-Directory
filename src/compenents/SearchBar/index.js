import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchBar() {
    return (
        <div>
            <Form.Group>
            <Form.Control className="search" size="lg" type="text" placeholder="Search.." /> 
            </Form.Group>
        </div>
    )
}

export default SearchBar
