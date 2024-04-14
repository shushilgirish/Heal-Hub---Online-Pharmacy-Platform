import React from 'react';
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

function App() {
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
        </Route>
        <Route path="/admin" element={<Layout3 />}>
          <Route index element={<Adminhome/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
