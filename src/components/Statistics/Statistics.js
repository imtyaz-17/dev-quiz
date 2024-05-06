import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const data = quizData.data;

    return (
        <div className='flex flex-col justify-center items-center font-bold m-3'>
            <h1 className="text-2xl text-center mb-3">LineChart</h1>
            <div className="w-full sm:w-auto">
                <LineChart
                    width={window.innerWidth * 0.9} // Adjust the width to 90% of the window width
                    height={400} // Set a fixed height
                    data={data}
                    margin={{
                        top: 5,
                        right: 30, // Increase right margin for better display
                        left: 30, // Increase left margin for better display
                        bottom: 5,
                    }}
                >
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <p className='text-xl w-full sm:w-1/2 text-center mt-3'>
                This line chart illustrates the distribution of quiz questions across four topics: JavaScript, CSS, Git, and React. The horizontal axis represents the topic names, while the vertical axis indicates the number of quiz questions.
            </p>
        </div>
    );
};

export default Statistics;
