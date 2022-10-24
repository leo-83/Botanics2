import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingNavbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

export const UserNavbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #ffa585;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: transparent;
`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  background-color: #FFFFFF;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const LoginButton = styled.button`
  background-color: C0C0C0;
  border-radius: 25px;
  height: 40px;
  width: 75px;
  border-color: A9A9A9;
  color: black;
  font-family: Andale mono, monospace;
  font-size: 15px;
`;

export const SignupButton = styled.button`
  background-color: transparent;
  border-radius: 25px;
  height: 40px;
  width: 75px;
  border-color: A9A9A9;
  color: black;
  font-family: Andale mono, monospace;
  font-size: 15px;
`;