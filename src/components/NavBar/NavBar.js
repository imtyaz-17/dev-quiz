import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center py-2 px-12 bg-slate-500 text-white'>
            <div>
                <h2 className='text-3xl font-bold'>Dev-Quiz</h2>
            </div>
            <div className='flex space-x-8 text-xl font-semibold '>
                <NavLink to='/home' className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 '>Home</NavLink>
                <NavLink className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/statistics'>Statistics</NavLink>
                <NavLink className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/blog'>Blog</NavLink>
                <NavLink className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;