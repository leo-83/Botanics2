import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

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
           <Link to='/myplants'>
            <li>My Plants</li>
          </Link>
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

  return (
    <>
      <nav>
        <ul>
          {/* Link that will show regardless of if you are log in or not */}
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/aboutUs'>
            <li>About Us</li>
          </Link>
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