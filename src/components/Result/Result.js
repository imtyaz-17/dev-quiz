import React from 'react';

const Result = () => {
    return (
        <div className='fixed right-0 bg-gray-100 p-8 shadow-lg'>
            <h2 className="text-2xl font-bold mb-4 text-green-500">Quiz Result</h2>
            <div className="mb-4">
                <p className="text-lg font-medium">Total Questions: 20</p>
                <p className="text-lg font-medium">Correct Answers: 10</p>
                <p className="text-lg font-medium">Wrong Answers: 18</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <p className="text-lg font-bold">Your Score:</p>
                <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                        %
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;