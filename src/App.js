import React, {useState, useEffect} from 'react';
import Employees from './employees.json';
import EmployeeCard from './compenents/EmployeeCard'
import Wrapper from './compenents/Wrapper'
import Title from './compenents/Title'
import SearchFilter from './compenents/SearchFilter'

function App() {
  const [employees, setEmployees] = useState(Employees);
  const [search, setSearch] = useState("");
  const [occupation, setOccupation] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
  }; 
  const handleOccupationChange = event => {
    setOccupation(event.target.value);
    console.log("Changed")
  }; 

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, employees])

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(emp => emp.occupation.toLowerCase().includes(occupation.toLowerCase()))
    )
  }, [occupation, employees])

  //const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));
  


  const employeelist = filteredEmployees.map((employee) =>
    <EmployeeCard
    key={employee.id}
    id={employee.id}
    name={employee.name}
    image={employee.image}
    occupation={employee.occupation}
    location={employee.location}
    />
    );

  return (
    <>
      <Title>Meet Our Employees</Title>
      <SearchFilter 
      employees={employees} 
      handleOccupationChange={handleOccupationChange} 
      occupationValue={occupation} 
      searchValue={search} 
      handleSearchonChange={handleChange}
      />
    <Wrapper>
      {employeelist}
    </Wrapper>
    </>
  );
}

export default App;
