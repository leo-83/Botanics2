import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Nomatch from "./components/shared/Nomatch";
import MainNavbar from "./components/shared/MainNavbar";
// import ProfileNavbar from "./components/shared/ProfileNavbar";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Plants from "./components/plants/Plants";
import PlantForm from "./components/plants/PlantForm";
import Profile from "./components/auth/Profile";
import Notes from "./components/notes/Notes";
import Wishlist from "./components/wishlists/Wishlist";
import WishlistForm from "./components/wishlists/WishlistForm";
import Propogations from './components/propogation/Propogations';
import Footer from './components/shared/Footer';
import Pestdiseases from  './components/pestdiseases/Pestdiseases'
import PestdiseaseForm from  './components/pestdiseases/PestdiseaseForm'
import AboutUs from "./components/aboutus/AboutUs";
// import Header from "./components/shared/Header";

const App = () => (
  <>
    <MainNavbar />
      {/* <Header> */}
        <FetchUser>
          <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<ProtectedRoute />}>
                  <Route path="/plants" element={<Plants />} />
                  <Route path="/:id/updatePlant" element={<PlantForm />} />
                  {/* <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/:id/updateWishlist" element={<WishlistForm />} /> */}
                  <Route path='/:plantId/pestdiseases' element={<Pestdiseases />} />
                  <Route path='/:plantId/updatePestdisease' element={<PestdiseaseForm />} />
                  <Route path="/:plantId/propogations" element={<Propogations />} />
                  <Route path="/:plantId/notes" element={<Notes />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Nomatch />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
          </>
        </FetchUser>
        {/* </Header> */}
      <Footer />
  </>
);

export default App;
