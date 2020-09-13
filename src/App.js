import React from 'react';
import employees from './employees.json';
import EmployeeCard from './compenents/EmployeeCard'
import SearchBar from './compenents/SearchBar'
import Wrapper from './compenents/Wrapper'
import Title from './compenents/Title'

function App() {
  const [employee, setEmployee] = React.useState(employees);

  console.log(employee);

  const employeelist = employee.map((employee) =>
    <EmployeeCard
    key={employee.id}
    id={employee.id}
    name={employee.name}
    image={employee.image}
    occupation={employee.occupation}
    location={employee.location}
    onClick={'remove employee'}
    />
    );

  return (
    <>
      <Title>Employee Directory</Title>
      <SearchBar />
    <Wrapper>
      {employeelist}
    </Wrapper>
    </>
  );
}

export default App;
