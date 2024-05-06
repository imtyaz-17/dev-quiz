import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center font-bold text-3xl border-2 border-yellow-300 p-6 md:w-2/3 lg:w-1/2 mx-auto'>
            <ExclamationTriangleIcon className='h-16 w-16 md:h-20 md:w-20 text-red-700' />
            <h5 className='py-3'>Oops</h5>
            <p>404!</p>
            <p className='py-3'>Page Not Found</p>
            <Link to='/' className='py-3 text-blue-400 underline'>Dev-Quiz</Link>
        </div>
    );
};

export default Error;
