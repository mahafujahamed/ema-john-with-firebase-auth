import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(user => {
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'placeholder='Enter your email' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'placeholder='Enter your password' required  />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;