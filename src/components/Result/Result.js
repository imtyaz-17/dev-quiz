import React, { useContext } from 'react';
import { QuestionsContext } from '../Quiz/Quiz';

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
        <aside className='lg:fixed lg:right-0 lg:bottom-0 md:static md:inset-auto bg-gray-100 p-4 md:p-8 shadow-lg'>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-500">Quiz Result</h2>
            <div className="mb-4">
                <p className="text-md font-medium">Total Questions: {totalQuestions}</p>
                <p className="text-md font-medium">Correct Answered: {correctCount}</p>
                <p className="text-md font-medium">Wrong Answered: {wrongCount}</p>
                <p className="text-md font-medium">Total Answered: {totalAnswered}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <p className="text-lg font-bold mb-2">Your Score:</p>
                <div className="flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-20 sm:h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl sm:text-xl font-bold">
                        {score}%
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Result;
