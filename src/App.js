import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Profile from './Screens/Profile/Profile'
import Signup from './Screens/Signup/Signup';
import Login from './Screens/Login/Login';
import Cart from './Screens/Cart/Cart';
import AddProduct from './Screens/AddProduct/AddProduct';
import BuyProduct from './Screens/BuyProduct/BuyProduct';
import ChangeProfile from './Screens/ChangeProfile/ChangeProfile';
import Fianance from './Screens/Fianance/Fianance';
import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="changeProfile" element={<ChangeProfile />} />
          <Route path="buyproduct" element={<BuyProduct />} />
          <Route path="finance" element={<Fianance />} />
          <Route path="changeprofile" element={<ChangeProfile />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
