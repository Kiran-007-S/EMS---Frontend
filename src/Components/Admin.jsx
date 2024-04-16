import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios' ;
import {Link} from 'react-router-dom'

function Admin() {
  // api fecthing to get all the details
  const base_url = 'http://localhost:8000'

  const [allEmployees,setAllEmployees] = useState([])
  
  const fetchData = async()=>{
    const result = await axios.get(`${base_url}/get-all-employees`);
    console.log(result.data.employees);
    setAllEmployees(result.data.employees);
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(allEmployees)

  const deleteEmployee = async(id)=>{
    const result = await axios.delete(`${base_url}/delete-an-employee/${id}`)
    alert(result.data.message)
    fetchData()
  }


  return (
    <div>
      <h1 className="text-center text-primary m-4">
        Employee Management System
      </h1>
      <div className="container my-5">
        <p className="" style={{ textAlign: "justify" }}>
          Employee management refers to the processes used to ensure employees
          perform their best. It consists of keeping track of employees'
          achievements and progress, fostering healthy professional
          relationships and giving them the tools they need to succeed.An
          employee management system is technology designed to streamline core
          HR services and improve workforce productivity. It accomplishes these
          goals largely by automating labor-intensive,administrative tasks and
          using analytics to drive business decisions.Depending on the vendor,
          the HR product suite may include talent acquisition, payroll,
          timekeeping, benefits administration and more
        </p>
      </div>
      
      <div className="container d-flex">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </MDBTableHead>
          {allEmployees.map((item)=>(
            <MDBTableBody>
            <tr>
              <td>
                {item.id}
              </td>
              <td>
                 {item.name}
              </td>
              <td>
                 {item.age}
              </td>
              <td>
                 {item.designation} 
              </td>
              <td>{item.salary}</td>
              <td>
                <div className="d-flex justify-content-evenly">
                   <Link to={`view/${item.id}`}>
                       <i className="fa-solid fa-eye"></i>
                   </Link>
                   <Link to={`edit/${item.id}`}>
                       <i className="fa-solid fa-pen text-primary"></i>
                   </Link>
                  <i onClick={()=>deleteEmployee(item.id)} className="fa-solid fa-trash text-danger"></i>
                </div>
              </td>
            </tr>
          </MDBTableBody>
          ))}
        </MDBTable>
        <Link to={'/add'}>
      <a href="w" className="btn btn-primary" style={{ float: "right" }}>
          Add
      </a>
      </Link>
      </div>
    </div>
  );
}

export default Admin;
