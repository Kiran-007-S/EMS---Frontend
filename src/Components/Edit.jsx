import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const {id} = useParams();
  console.log(id);
 
  const base_url = "http://localhost:8000";
  const location = useNavigate()

  const [emp_id, setId] = useState();
  const [emp_name, setName] = useState(" ");
  const [emp_age, setAge] = useState();
  const [emp_designation, setDesignation] = useState(" ");
  const [emp_salary, setSalary] = useState();

  const getemployee = async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
  
    setId(result.data.employees.id)
    setName(result.data.employees.name)
    setAge(result.data.employees.age)
    setDesignation(result.data.employees.designation)
    setSalary(result.data.employees.salary) 
  }

  useEffect(()=>{
    getemployee(id)
  },[])

  const updateEmployee =  async(e)=>{
        e.preventDefault()
        const body = {
          id:emp_id,
          name:emp_name,
          age:emp_age,
          designation:emp_designation,
          salary:emp_salary }

        const result = await axios.post(`${base_url}/update-an-employee/${id}`,body)
        alert(result.data.message)
        location('/')
      }

  return (
    <div>
      <div className="container text-center m-5">
        <h2>Edit Employee</h2>
        <form className="p-5">
          <div>
            <MDBInput
              onChange={(e) => {
                setId(parseInt(e.target.value));
              }}
              value={emp_id}
              label="ID"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={emp_name}
              label="Name"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              onChange={(e) => {
                setAge(parseInt(e.target.value));
              }}
              value={emp_age}
              label="Age"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              value={emp_designation}
              label="Designation"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              onChange={(e) => {
                setSalary(parseFloat(e.target.value));
              }}
              value={emp_salary}
              label="Salary"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <div>
              <button
                onClick={(e) => {
                  updateEmployee(e);
                }}
                className="btn btn-success m-3"
              >
                Update <i className="fa-solid fa-user"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit;