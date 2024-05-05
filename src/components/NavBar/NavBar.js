import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center py-2 px-12 bg-slate-500 text-white'>
            <div >
                <h2 className='text-3xl font-bold'>Dev-Quiz</h2>
            </div>
            <div className='flex space-x-8 text-xl font-semibold '>
                <Link to='/' className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 '>Home</Link>
                <Link className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/statistics'>Statistics</Link>
                <Link className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/blog'>Blog</Link>
                <Link className='hover:text-sky-200 active:text-sky-200 focus:outline-none focus:text-sky-300 ' to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default NavBar;