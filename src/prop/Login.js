import './login.css';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
  return (
    <div className='login-log'>
        <div className='login-log-in'>
        <h2 className='login-h'><u>Login</u></h2>
        <form className='login-form'>
            <label>email-id:</label><br/>
            <input type='email' placeholder='enter email' value={email} onChange={e => setEmail(e.target.value)}/><br/>
            <label>password:</label><br/>
            <input type='password' placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)}/><br/>
            <button type='submit'>login</button>
            <Link to="/signup" className='login-signup'>signup?</Link>
        </form>
        </div>
    </div>
  );
}