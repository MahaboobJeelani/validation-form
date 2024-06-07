
import React, { useState, axios } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:8081/login', { email, password });
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
