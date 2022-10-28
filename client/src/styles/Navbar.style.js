import styled from 'styled-components';

export const UserNavbar = styled.nav`
  width: 102.5%;
  height: 80px;
  background-color: #ffa585;
  display: flex;
  flex-direction: column;
  margin-left: -32px;
`;

export const NavbarButton = styled.button`
  border-color: transparent;
  color: black;
  background-color: transparent;
  font-size: 17px;
  font-family: DosisRegular !important;
  :hover {
    color: #248232;
  }
  margin-top: 25px;
`;

export const NavbarBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  top: 80px;
  background: rgba(0, 0, 0, 0.8);
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: left;
  padding-left: 30px;
  background-color: transparent;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: right;
  padding-right: 50px;
  background-color: transparent;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LoginButton = styled.button`
  background-color: C0C0C0;
  border-radius: 25px;
  height: 40px;
  width: 75px;
  color: black;
  font-family: Dosis-Light;
  font-size: 15px;
  border: 1px solid #000000;
  margin-top: 10px;
  margin-left: 5px;
`;

export const SignupButton = styled.button`
  background-color: #FFFFFF;
  border-radius: 25px;
  height: 40px;
  width: 75px;
  color: black;
  font-family: Dosis-Light;
  font-size: 15px;
  border: 1px solid #000000;
  margin-top: 10px;
`;

export const Logo = styled.img`
  position: absolute;
  width: 169px;
  height: 169px;
  left: 633px;
  top: 0px;
  display: flex;
  margin-top: -45px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size:45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  right: 120px;
  top: 10px;
  display: flex;
  margin-top: 0px;
  border-radius:50%;
`;

export const LogoutButton = styled.button`
  border-color: transparent;
  color: black;
  background-color: transparent;
  font-size: 17px;
  font-family: DosisRegular;
  :hover {
    color: #248232;
  }
  padding: 0px;
  margin: 20px;
`;