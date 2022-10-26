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
  color: #248232;
  font-size: ${ props => whatFont(props.size) };
  background: #605856;
  text-align: center;
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
 