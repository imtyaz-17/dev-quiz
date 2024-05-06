import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDoubleRightIcon, EyeIcon } from '@heroicons/react/24/solid'
const TopicCard = ({ topic }) => {
    const { id, logo, name, total } = topic;
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/topic/${id}`);
    }
    return (
        <div className="max-w-sm bg-white border border-sky-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <img className="rounded-t-lg bg-slate-500" src={logo} alt="" />
            <div className="p-4">
                <div className='flex justify-between items-center'>
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{name}</h5>
                    <p className='text-xl font-semibold text-gray-400 ml-'>{total} Questions</p>
                </div>
                <div>
                    <button onClick={() => handleNavigate(id)} className='w-full justify-center inline-flex items-center mt-3 p-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:hover:bg-blue-700'>
                        Start Quiz <ChevronDoubleRightIcon className="size-5"></ChevronDoubleRightIcon>
                    </button>
                </div>

            </div>
        </div >

    );
};

export default TopicCard;