import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h1 className="text-5xl text-center font-bold">Register now!</h1>
                <form className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary mt-4">Register</button>
                    </fieldset>
                    <p>Already have an account? Please, <Link to="/register" className='font-semibold text-blue-500 underline '>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;