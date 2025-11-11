import React, { use} from 'react';
import { Link, NavLink } from 'react-router';
import '../Navbar/navbar.css'
import ToggleTheme from '../toggleTheme/ToggleTheme';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const { user } = use(AuthContext);
    // console.log(user)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to='/createEvent'>Create Event</NavLink></li>
        <li><NavLink to="/upcomingEvent">Upcoming Event</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl"><span className='text-secondary'>Green</span>Roots</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <ToggleTheme></ToggleTheme>
                {
                    user ? (
                        <div className="flex gap-2 items-center justify-center">
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName || user?.email || "User"}>
                                <FaUserCircle className="h-[30px] w-[30px] cursor-pointer text-primary" />
                            </div>
                            <Link className="btn btn-primary">Logout</Link>
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;