import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import loginbg from '../images/sam0.jpg';

const divStyle = {
  backgroundImage: 'url(' + loginbg + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  borderRadius: '5px',
  height: '600px'
};

function Login() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={divStyle}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>

                <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Username' id='form2' type='text'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Log in</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              {/* <MDBCardImage src={loginbg} fluid/> */ }
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;