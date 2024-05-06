import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Result from '../Result/Result';
import { ToastContainer } from 'react-toastify';

export const QuestionsContext = createContext([]);
export const AnsweredContext = createContext({});

const Quiz = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data;
    const questions = quizData.questions;

    const [wrong, setWrongAnswered] = useState([]);
    const [correct, setCorrectAnswered] = useState([]);

    const correctCounter = (correctAns) => {
        setCorrectAnswered((prevCorrect) => [...prevCorrect, correctAns]);
    };

    const wrongCounter = (wrongAns) => {
        setWrongAnswered((prevWrong) => [...prevWrong, wrongAns]);
    };

    if (!questions) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <QuestionsContext.Provider value={questions}>
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='md:col-span-5 ml-6 mt-2 p-3 border-2 border-gray-200'>
                    <h1 className='text-4xl text-center font-bold mb-4 md:mb-6'>
                        <span className='text-sky-700'>{quizData.name}</span> Quiz
                    </h1>
                    <div>
                        <AnsweredContext.Provider value={{ correctCounter, wrongCounter }}>
                            {questions.map((question, indx) => (
                                <Question key={question.id} ques={question} indx={indx} />
                            ))}
                        </AnsweredContext.Provider>
                    </div>
                </div>
                <div className='md:col-span-1'>
                    <Result correct={correct} wrong={wrong} />
                </div>
                <ToastContainer />
            </div>
        </QuestionsContext.Provider>
    );
};

export default Quiz;
