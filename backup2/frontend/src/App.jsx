// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout1 from '../src/components/Layout';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import Home from '../src/pages/Customer/Home';
import About from '../src/pages/Customer/About';
import Contact from '../src/pages/Customer/Contact';
import Signin from '../src/pages/Signin/Signin';
import Signup from '../src/pages/SignUp/Signup';
import Loggedin from './pages/Customer/Loggedin';
import Adminhome from './pages/Admin/Adminhome';
import Addproduct from './pages/Admin/Addproduct';
import Manageuser from './pages/Admin/Manageuser';
import Profile from './pages/Customer/Profile';
import ChangePassword from './pages/Customer/ChangePassword';
import Category from './pages/Customer/Category';
import BuyProduct from './pages/Customer/BuyProduct';
import AddToCartPage from './pages/Customer/AddToCart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout1 />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/customer" element={<Layout2 />}>
                    <Route index element={<Loggedin />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="buyproduct" element={<BuyProduct addToCart={addToCart} cartItems={cartItems} />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="changepass" element={<ChangePassword />} />
                    <Route path="category" element={<Category addToCart={addToCart} cartItems={cartItems} />} />
                    <Route path="addtocart" element={<AddToCartPage cartItems={cartItems} setCartItems={setCartItems} />} />
                </Route>
                <Route path="/admin" element={<Layout3 />}>
                    <Route index element={<Adminhome />} />
                    <Route path="addproduct" element={<Addproduct />} />
                    <Route path="manageuser" element={<Manageuser />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="changepass" element={<ChangePassword />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
