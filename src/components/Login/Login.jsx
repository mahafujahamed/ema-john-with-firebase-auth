import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(user => {
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
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
                    <input type={show ? "text" : "password"} name='password'placeholder='Enter your password' required  />
                    <p onClick={()=> setShow(!show)}><small>
                        {
                            show ? <span>Hide password</span> : <span>Show password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;