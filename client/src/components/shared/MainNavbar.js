import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { LeftContainer,
  LoginButton,
  NavbarBorder,
  NavbarButton,
  NavbarInnerContainer,
  RightContainer, 
  SignupButton, 
  UserNavbar,
} from '../../styles/Navbar.style';

const MainNavbar = ({ user, handleLogout }) => {
  const rightNavItems = () => {
    // links that show up if you are logged in
    if (user) {
      return (
        <>
          <UserNavbar>
            <NavbarInnerContainer>
              <LeftContainer>
                <Link to='/propogations'>
                  <NavbarButton>
                    Propogation
                  </NavbarButton>
                </Link>
                <Link to='/plants'>
                  <NavbarButton>
                    All Plants
                  </NavbarButton>
                </Link>
                <Link to='/'>
                  <NavbarButton>
                    Home
                  </NavbarButton>
                </Link>
              </LeftContainer>
              <RightContainer>
                <Link to='/profile'>
                  <NavbarButton>
                    Profile
                  </NavbarButton>
                </Link>
              </RightContainer>
            </NavbarInnerContainer>
          </UserNavbar>
        {/* <NavbarBorder></NavbarBorder> */}
      </>
    )
  } else {
// links that will show up if you are not logged in
    return (
      <>
        <RightContainer>
          <Link to='/register'>
            <SignupButton>
              Sign Up
            </SignupButton>
          </Link>
          <Link to='/login'>
            <LoginButton>
               Login
            </LoginButton>
          </Link>
        </RightContainer>
      </>
    )
  }
}

  return (
    <>
      <nav>
        <ul>
          {/* Link that will show regardless of if you are log in or not */}
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}


  const ConnectedMainNavbar = (props) => (
    
    <AuthConsumer>
      { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
  )

  export default ConnectedMainNavbar;