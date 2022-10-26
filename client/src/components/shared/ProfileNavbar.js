import { AuthConsumer } from '../../providers/AuthProvider';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavbarLink, UserNavbar } from '../../styles/Navbar.style';

const ProfileNavbar = ({ user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links that show up if you are logged in
    if (user) {
      return (
        <>
          <NavbarLink to='/profile'> Profile</NavbarLink>
          <NavbarLink to='/propogation'> Propogations</NavbarLink>
          <NavbarLink to='/plants'> All Plants</NavbarLink>
          <button onClick={() => handleLogout() }> Logout</button>
        </>
      )
    }
  }
}
    
  const ConnectedProfileNavbar = (props) => (
    <AuthConsumer>
      { value => <ProfileNavbar {...props} {...value} />}
    </AuthConsumer>
  )

export default ConnectedProfileNavbar;