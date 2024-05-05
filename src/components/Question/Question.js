import React from 'react';
import htmlReactParser from 'html-react-parser';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
const Question = ({ ques, indx }) => {
    const { options, question, correctAnswer } = ques;

    return (
        <div className="bg-sky-300 rounded-5 shadow-lg p-4 container my-5">
            <div className="flex justify-between items-center">
                <span className=" text-xl font-medium">Question - {indx + 1}: {htmlReactParser(question)}</span>

                <h5 className=' cursor-pointer p-4'>
                    <EyeIcon className="size-6 text-red-600 hover:text-lime-600" />
                </h5>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    options.map(option => <Option key={option.id} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;