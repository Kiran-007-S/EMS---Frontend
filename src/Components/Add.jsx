import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Add() {
  const location = useNavigate()
  const [id, setId] = useState();
  const [name, setName] = useState(" ");
  const [age, setAge] = useState();
  const [designation, setDesignation] = useState(" ");
  const [salary, setSalary] = useState();

  const base_url = "http://localhost:8000/add-an-employee";

  const AddEmployee = async (e) => {
    e.preventDefault();
    console.log(id, name, age, designation, salary);

    const body = { id, name, age, designation, salary };
    console.log(body);
    const result = await axios
      .post(base_url, body)
      .then((response) => {
        alert(response.data.message);
        location('/')
      })
      .catch((error) => {
        alert("Please enter unique employee id");
      });
  };

  console.log(id);
  return (
    <div>
      <div className="container text-center m-5">
        <h2>Add Employee</h2>
        <form className="p-5">
          <div>
            <MDBInput
              onChange={(e) => {
                setId(parseInt(e.target.value));
              }}
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
              label="Salary"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <div>
              <button
                onClick={(e) => {
                  AddEmployee(e);
                }}
                className="btn btn-success m-3"
              >
                Add<i className="fa-solid fa-user-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
