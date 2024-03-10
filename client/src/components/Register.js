import { useState } from 'react';
import pic from './images1/img.png';
import { Link } from 'react-router-dom';
import axios from 'axios'


function SignupForm  () {
 const [name, setName] = useState()
 const [email, setEmail] = useState()
 const [phone, setPhone] = useState()
 const [password, setPassword] = useState()
 const [message, setMessage] = useState("");


 const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:3001/register", { name, email, phone, password })
    .then((response) => {
      setMessage(response.data.message);
    })
    .catch((error) => {
      setMessage(error.response.data.message);
    });
};

 return (
    <form onSubmit={handleSubmit}>
      <div className='image' style={{backgroundImage: `url(${pic})`}}> 
      <div className="form-box">
      <h1>SignUp</h1>
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
        {message && <p>{message}</p>}
      </div>
      </div>
    </form>
 );
};

export default SignupForm;