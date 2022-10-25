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
const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links that show up if you are logged in
    if (user) {
      return (
        <>
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
          {/* <Link to='/wishlists'>
            <li>Propogations</li>
          </Link> */}
          <Link to='/plants'>
            <li>My Plants</li>
          </Link>
          <button onClick={() => handleLogout() }>
            Logout
          </button>
        </>
      )
    } else {
      // links that will show up if you are not logged in
      return ( 
        <>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/register'>
            <li>Sign-up</li>
          </Link>
        </>
      )
    }
  }

  const ConnectedMainNavbar = (props) => (
    <AuthConsumer>
      { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
  )

  export default ConnectedMainNavbar;