import React from 'react';
import './App.css';
import pic from './images/img.png';
import Register from './components/Register';
import LoginForm from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
          <Route path="/register" element={<Register />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
