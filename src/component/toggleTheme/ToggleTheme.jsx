import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const handleToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={handleToggle}
            className="btn btn-ghost btn-circle text-xl"
            title="Toggle theme"
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default ToggleTheme;