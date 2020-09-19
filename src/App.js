import React, { useState, useEffect } from "react";
import Employees from "./employees.json";
import EmployeeCard from "./compenents/EmployeeCard";
import Wrapper from "./compenents/Wrapper";
import Title from "./compenents/Title";
import SearchFilter from "./compenents/SearchFilter";

function App() {
  const [employees, setEmployees] = useState(Employees);
  const [search, setSearch] = useState("");
  const [occupation, setOccupation] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [sortButton, setSortButton] = useState("Ascending");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
    console.log("Changed");
  };

  const handleClick = (event) => {
    if (sortButton === "Descending") {
      setSortedEmployees(
        employees.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
      setFilteredEmployees(sortedEmployees);
      setSortButton("Ascending");
    } else {
      setSortedEmployees(
        employees.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }).reverse()
      );
      setFilteredEmployees(sortedEmployees);
       setSortButton("Descending");

      }
      console.log(sortedEmployees)
    console.log(sortButton);
  };

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, employees]);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((emp) =>
        emp.occupation.toLowerCase().includes(occupation.toLowerCase())
      )
    );
  }, [occupation, employees]);

  useEffect(() => {
    setSortedEmployees(employees.sort());
  }, [sortedEmployees, employees]);

  const employeelist = filteredEmployees.map((employee) => (
    <EmployeeCard
      key={employee.id}
      id={employee.id}
      name={employee.name}
      image={employee.image}
      occupation={employee.occupation}
      location={employee.location}
    />
  ));

  return (
    <>
      <Title>Meet Our Employees</Title>
      <SearchFilter
        employees={employees}
        handleOccupationChange={handleOccupationChange}
        occupationValue={occupation}
        searchValue={search}
        sortButtonValue={sortButton}
        handleSearchonChange={handleChange}
        onClick={handleClick}
      />
      <Wrapper>{employeelist}</Wrapper>
    </>
  );
}

export default App;
