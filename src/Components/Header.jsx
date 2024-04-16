import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar style={{backgroundColor:'#540599'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <h1 className='text-center'style={{color:'whitesmoke'}} ><i className='fa fa-users fs-2x m-2'></i> EMS</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header;