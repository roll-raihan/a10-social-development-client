import React, { use, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import '../Navbar/navbar.css'
import ToggleTheme from '../toggleTheme/ToggleTheme';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle, FaCalendarPlus, FaTasks, FaCalendarCheck, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/upcomingEvent">Upcoming Event</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Well Done!",
                    text: "Successfully logged out",
                    icon: "success"
                });
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

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
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || user?.email || "User"}>
                                    <FaUserCircle className="h-[35px] w-[30px] cursor-pointer text-primary" />
                                </div>
                            </div>

                            {dropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-56 bg-base-100 rounded-lg shadow-xl border border-base-300 py-2 z-50"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <div className="px-4 py-3 border-b border-base-300">
                                        <p className="text-sm font-semibold">{user?.displayName || 'User'}</p>
                                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                    </div>

                                    <Link
                                        to="/createEvent"
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        <FaCalendarPlus className="text-primary" />
                                        <span className="text-sm font-medium">Create Event</span>
                                    </Link>

                                    <Link
                                        to="/manageEvent"
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        <FaTasks className="text-primary" />
                                        <span className="text-sm font-medium">Manage Events</span>
                                    </Link>

                                    <Link
                                        to="/joinedEvent"
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        <FaCalendarCheck className="text-primary" />
                                        <span className="text-sm font-medium">Joined Events</span>
                                    </Link>

                                    <div className="border-t border-base-300 mt-2 pt-2">
                                        <button
                                            onClick={handleLogOut}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-error hover:bg-error/10 transition-colors"
                                        >
                                            <FaSignOutAlt />
                                            <span className="text-sm font-medium">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
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