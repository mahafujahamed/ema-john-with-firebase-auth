import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignup = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'placeholder='Enter your email' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'placeholder='Enter your password' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confirm'placeholder='Enter your password' required  />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
        </div>
    );
};

export default Signup;