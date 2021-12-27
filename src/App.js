import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Explore />} />

          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />

          <Route path='/profile' element={<PrivateRoute />} >
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/sign-in' element={<Signin />} />

          <Route path='/sign-up' element={<SignUp />} />

          <Route path='/forgot-password' element={<ForgotPassword />} />

        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
