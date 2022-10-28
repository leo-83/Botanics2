import React, { useState } from 'react';
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
  Logo,
  ProfileImage,
  LogoutButton,
} from '../../styles/Navbar.style';
import BotanicsLogo from '../../images/BotanicsLogo.png'
import profileimg from '../../images/profileimg.jpg'

const MainNavbar = ({ user, handleLogout }) => {
  const rightNavItems = () => {
  
    // links that show up if you are logged in
    if (user) {
      return (
        <>
          <UserNavbar>
            <NavbarInnerContainer>
              <LeftContainer>
                <Link to='/propogation'>
                  <NavbarButton>
                    Propogation
                  </NavbarButton>
                </Link>
                <Link to='/plants'>
                  <NavbarButton>
                    All Plants
                  </NavbarButton>
                </Link>
                <Link to='/home'>
                  <NavbarButton>
                    Home
                  </NavbarButton>
                </Link>
                <Logo src={BotanicsLogo}></Logo>
              </LeftContainer>
              <RightContainer>
                <Link to='/profile'>
                    <NavbarButton>
                      <ProfileImage src={profileimg}></ProfileImage>
                    </NavbarButton>
                </Link>
                <LogoutButton onClick={() => handleLogout() }>
                  Logout
                </LogoutButton>
              </RightContainer>
            </NavbarInnerContainer>
          </UserNavbar>
        <NavbarBorder></NavbarBorder>
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