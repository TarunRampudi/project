import React from 'react';
import './App.css';
import pic from './images/img.png';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from  './components/mainpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
function Home() {
  return (
    
    <div className='image' style={{backgroundImage: `url(${pic})`}}>
      <Link to="/register" className="button">Order Your Favorite Food</Link>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LoginForm" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
