import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const whatFont = (size) => {
  switch (size) {
    case 'sm':
      return '18px';
    case 'md':
      return '28px'
    default:
      return '48px';
    
  }
}


export const MainHeader = styled.h1`
  color: black;
  background: #FFFFFF;
  font-size: 45px;
  text-align: left;
`

export const Header2 = styled.h2`
`

export const Button = styled.button`
  color: #FFFFFF;
  background: #248232;
  text-align: center;
  border-width: 0px;
  border-radius: 25px;
  height: 50px;
  width: 80px;
  font-family: andale mono, monospace;
  /* outline-width: 10px; */
`

export const GreyCol = styled(Col)`
  background: #605856;
  color: #FFFFFF;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const WhiteCol = styled(Col)`
  background: #FFFFFF;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  `

export const GreenLink = styled (Link)`
  color: #008000; 
  font-size: 24px;
  `