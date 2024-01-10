import { useState } from 'react';
import pic from './images1/img.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'


const SignupForm = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [phone, setPhone] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault()
  axios.post('https://localhost:3001/register',{name,email,phone,password})
  .then(result =>console.log(result))
  .catch(err=>console.log(err))
 }

 return (
    <form onSubmit={handleSubmit}>
      <div className='image' style={{backgroundImage: `url(${pic})`}}> 
      <div className="form-box">
      <h1>Register</h1>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/LoginForm" className="no-underline">Already have an account? <span style={{color:"red"}}>Log in</span></Link>        
        <button type="submit">Signup</button>
      </div>
      </div>
    </form>
 );
};

export default SignupForm;