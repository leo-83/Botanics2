import React from 'react';
// import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { LandingNavbar,
  LeftContainer,
  LoginButton,
  NavbarInnerContainer,
  NavbarLink,
  RightContainer, 
  SignupButton,
} from '../../styles/Navbar.style';
// import { Navbar, Container, Nav } from 'react-bootstrap';

  function MainNavbar() {
    return (
      <LandingNavbar>
        <NavbarInnerContainer>
          <LeftContainer> </LeftContainer>
          <RightContainer>
            <NavbarLink to="/Login">
            <LoginButton>Login</LoginButton>
            </NavbarLink>
            <NavbarLink to="/Register">
            <SignupButton>Signup</SignupButton>
            </NavbarLink>
          </RightContainer>
        </NavbarInnerContainer>
      </LandingNavbar>
    )
  }

  const ConnectedMainNavbar = (props) => (
    <AuthConsumer>
      { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
  )

  export default ConnectedMainNavbar;