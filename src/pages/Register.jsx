import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: "Well Done!",
                    text: "You created an account",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h1 className="text-5xl text-center font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type="text" className="input" placeholder="Photo URL" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                    </fieldset>
                    <p>Already have an account? Please, <Link to="/login" className='font-semibold text-blue-500 underline '>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;