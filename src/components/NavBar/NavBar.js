import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='flex justify-between items-center flex-wrap p-4 bg-slate-500 text-white'>
            <div className='flex items-center flex-shrink-0 text-white mr-6 lg:mr-72'>
                <h2 className='text-md sm:text-xl md:text-2xl lg:text-4xl font-bold'>Dev-Quiz</h2>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <Bars3Icon className={`fill-current size-6 ${showMenu ? "hidden" : "block"}`} />
                    <XMarkIcon className={`fill-current size-6 ${showMenu ? "block" : "hidden"}`} />
                </button>
            </div>

            <div className={`w-full block lg:flex lg:items-center lg:w-auto font-semibold ${showMenu ? "block" : "hidden"}`}>
                <Link to='/' className='nav-link lg:inline-block'>Home</Link>
                <Link to='/statistics' className='nav-link lg:inline-block'>Statistics</Link>
                <Link to='/blog' className='nav-link lg:inline-block'>Blog</Link>
                <Link to='/about' className='nav-link lg:inline-block'>About</Link>
            </div>
        </nav>
    );
};

export default NavBar;

