import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      console.log(res.data); 
      alert('Login successful');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <br/>
      <br/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <br/>
      <br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
