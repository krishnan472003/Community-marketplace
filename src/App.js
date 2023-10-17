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


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />{/* done */}
          <Route path="/signup" element={<Signup />} />{/* done */}
          <Route path="/login" element={<Login />} />{/* done */}
          <Route path="/home/:id/cart" element={<Cart />} />{/* done */}
          <Route path="/home/:id/addproduct" element={<AddProduct />} />{/* done */}
          <Route path="/home/:id/profile" element={<Profile />} />
          <Route path="/home/:id/changeProfile" element={<ChangeProfile />} />
          <Route path="/home/:id/buyproduct" element={<BuyProduct />} />{/* done */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
