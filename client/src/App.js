import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Wishlist from '.components/wishlists/Wishlist'
// import Footer from './components/shared/Footer';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Nomatch />} />
      <Route path='/:plantId/wishlists' element={ <Wishlists /> } />
    </Routes>
    {/* <Footer /> */}
  </>
)

export default App;