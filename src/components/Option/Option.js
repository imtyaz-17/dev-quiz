import React from 'react';

const Option = ({ option, handleAnswer }) => {
    return (
        <div className='flex items-center mt-4 p-3 border border-orange-500 rounded w-full sm:w-3/4 mx-auto sm:ml-3'>
            <input
                onClick={() => handleAnswer(option)}
                className="form-radio h-4 w-4 mr-3 text-blue-500 border-gray-600 focus:ring-blue-500 focus:ring-2 transition ease-in-out duration-300"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
            />
            <label htmlFor="flexRadioDefault1" className='text-xl'>
                {option}
            </label>
        </div>
    );
};

export default Option;
