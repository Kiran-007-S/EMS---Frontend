import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import axios from "axios";
import { useParams } from "react-router-dom";

function View() {

  const base_url = 'http://localhost:8000'

  const [details ,setDetails] = useState([])

  const {id} = useParams()
  console.log(id)
  const getemployee = async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    setDetails(result.data.employees)
    console.log(details)
  }

  useEffect(()=>{
    getemployee(id)
  },[])

  return (
    <div>
      <h2 className="text-center pt-5 text-primary">View Employee Details</h2>
      <div className="container p-5 m-5 d-flex justify-content-between">
        <MDBCard style={{ width: "35em", height: "25em" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">Employee Details</MDBCardTitle>
            <MDBCardText>
              <MDBListGroup className="py-4">
                <MDBListGroupItem
                  noBorders
                  className="bg-light text-primary p-3"
                >
                  Employee Id : {details.id} 
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  className="bg-light text-primary p-3"
                >
                  Name : {details.name} 
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  className="bg-light text-primary p-3"
                >
                  Age : {details.age} 
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  className="bg-light text-primary p-3"
                >
                  Designation : {details.designation} 
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  className="bg-light text-primary p-3"
                >
                  Salary : {details.salary} 
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <div className="image card text-center " style={{ width: "20em" }}>
          <img
            src="https://www.thoughtfulminds.org/wp-content/uploads/2015/02/User-icon.png"
            className="fluid"
            alt="user"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <MDBBtn href="/">Back To Home</MDBBtn>
      </div>
    </div>
  );
}

export default View;
