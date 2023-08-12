import './signup.css';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
    const[Name,setName]=useState('');
    const[mobno,setMobno]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
    <div className='signup-log'>
        <div className='signup-log-in'>
        <h2 className='signup-h'><u>Login</u></h2>
        <form className='signup-form'>
            <label>name:</label>
            <input type='text' placeholder='enter name' value={Name} onChange={e => setName(e.target.value)}/><br/>
            <label>mobile no:</label>
            <input type='tel' placeholder='enter mobile no' value={mobno} onChange={e => setMobno(e.target.value)}/><br/>
            <label>email-id:</label>
            <input type='email' placeholder='enter email' value={email} onChange={e => setEmail(e.target.value)}/><br/>
            <label>password:</label>
            <input type='password' placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)}/><br/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button type='submit'>signup</button>
            <Link to="/login" className='signup-login'>Login</Link>
        </form>
        </div>
    </div>
  );
}