import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center font-bold text-3xl border-2 border-yellow-300 p-6 m-6 '>
            <ExclamationTriangleIcon className='size-10 text-red-700' />
            <h5 className='py-3'>Oops</h5>
            <p> 404!</p>
            <p className='py-3'>Page Not found</p>
        </div>
    );
};

export default Error;