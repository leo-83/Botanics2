import styled from 'styled-components';


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

