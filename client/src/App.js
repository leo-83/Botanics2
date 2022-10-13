import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
// import Footer from './components/shared/Footer';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<ProtectedRoute /> }>
        {/* <Route path='/plants' element={<Plants />} />
        <Route path='/:id/updatePlant' element={<PlantForm />} /> */}
        {/* <Route path='/wishlists' element={<Wishlists />} />
        <Route path='/:id/updateWishlist' element={<WishlistForm />} /> */}
        {/* <Route path='/:plantId/notes' element={<Notes />} /> */}
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Nomatch />} />
      <Route path='/:plantId/wishlists' element={ <Wishlists /> } />
    </Routes>
    </>
    </FetchUser>
    {/* <Footer /> */}
  </>
)

export default App;