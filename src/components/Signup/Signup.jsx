import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignup = (event) => {
        // stop reloading
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        

        if(password !== confirm) {
            setError('Passwords do not match');
            return;
        }
        else if(password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        createUser(email, password)
        .then(user => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        }
        )
        .catch(error => {
            console.log(error);
            setError(error.message);
        }
        )
        
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
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;