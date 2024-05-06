import React, { useContext } from 'react';
import { QuestionsContext } from '../Quiz/Quiz';
import { ToastContainer } from 'react-toastify';

const Result = ({ correct, wrong }) => {
    const questions = useContext(QuestionsContext);

    const totalQuestions = questions.length;
    const totalAnswered = correct.length + wrong.length;
    const correctCount = correct.length;
    const wrongCount = wrong.length;

    const calculateScore = () => {
        if (totalQuestions === 0) return 0;
        if (correctCount <= totalQuestions) {
            const score = (correctCount / totalQuestions) * 100;
            return score.toFixed(1);
        }
    };

    const score = calculateScore();

    return (
        <div className='fixed right-0 bottom-0 bg-gray-100 md:bottom-auto md:right-auto md:p-md:shadow-none p-4 md:p-8 shadow-lg'>
            <h2 className="text-2xl font-bold mb-4 text-green-500">Quiz Result</h2>
            <div className="mb-4">
                <p className="text-lg font-medium">Total Questions: {totalQuestions}</p>
                <p className="text-lg font-medium">Correct Answered: {correctCount}</p>
                <p className="text-lg font-medium">Wrong Answered: {wrongCount}</p>
                <p className="text-lg font-medium">Total Answered: {totalAnswered}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <p className="text-lg font-bold mb-2">Your Score:</p>
                <div className="flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold">
                        {score}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
