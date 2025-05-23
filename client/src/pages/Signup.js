import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      console.log(res.data); 
      alert('Signup successful');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <br/>
      <br/>

      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <br/>
      <br/>

      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <br/>
      <br/>
      
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
