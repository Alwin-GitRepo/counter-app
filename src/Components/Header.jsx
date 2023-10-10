import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='warning' className='fixed-top'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img
                    src='https://cdn.dribbble.com/users/78672/screenshots/1174974/media/acb3baafa87cd036232099bb2e2eb5c2.gif'
                    height='30'
                    alt=''
                    loading='lazy'
                    />
                    <b>Counter App</b>
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    </div>
  )
}

export default Header