import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Result from '../Result/Result';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data;
    const questions = quizData.questions;
    console.log('questions', questions);
    return (
        <div className='grid grid-cols-6 '>
            <div className='col-span-5 ml-6 mt-2 p-3 border-2 border-gray-200'>
                <h1 className='text-4xl text-center font-bold'> <span className='text-sky-700'>{quizData.name}</span> Quiz
                </h1>
                <div>
                    {
                        questions.map((question, indx) => <Question key={question.id} ques={question} indx={indx}></Question>)
                    }
                </div>
            </div >
            <div>
                <Result></Result>
            </div>
        </div>

    );
};

export default Quiz;