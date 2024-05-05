import React from 'react';
import htmlReactParser from 'html-react-parser';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ ques, indx }) => {
    const { id, options, question, correctAnswer } = ques;
    const showCorrectAnswer = () => {
        console.log(id)
        toast.info(`Correct Answer : ${correctAnswer}`, {
            position: "top-right",
            autoClose: 2500,
            theme: "colored",
        });
    }
    const handleAnswer = (option) => {
        // console.log(option)
        if (option === correctAnswer) {
            // console.log('right')
            toast.success('Correct answer!', {
                position: "top-center",
                autoClose: 800,
            });
        } else {
            toast.error('Wrong answer!', {
                position: "top-center",
                autoClose: 1000,
            });
        }
    }
    return (
        <div className="bg-sky-300 rounded-5 shadow-lg p-4 container my-5">
            <div className="flex justify-between items-center">
                <span className=" text-xl font-medium">Question - {indx + 1}: {htmlReactParser(question)}</span>
                <h5 className=' cursor-pointer p-4'>
                    <EyeIcon onClick={showCorrectAnswer} className="size-6 text-red-600 hover:text-lime-600" />
                </h5>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    options.map((option, indx) => <Option key={indx} option={option} handleAnswer={handleAnswer}></Option>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;