import { useState } from 'react';
import pic from './images1/img.png';
import {  Link } from 'react-router-dom';


const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 

 const handleSubmit = async (e) => {
    e.preventDefault();
//     if (password !== password) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//       // logic to send request to backend and check for response
//       console.log('Signup attempt:', name, email, password, phone);
//       // on success
//       // clear error and update states
//       setError('');
//       // on error
//       // update error state
//       setError('Email already in use');
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Error signing up');
//     }
 };

 return (
    <form onSubmit={handleSubmit}>
      <div className='image' style={{backgroundImage: `url(${pic})`}}> 
      <div className="form-box">
        <h1>Login</h1>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/Register" className="no-underline">New to Order? <span style={{color:"red"}}>Create Account</span></Link>
        <button type="submit"><Link to ="/Homepage"><span style={{color:"white"}}>Login</span></Link></button>        
      </div>
      </div>
     </form>
 );
};

export default LoginForm;