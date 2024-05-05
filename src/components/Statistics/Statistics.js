import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


const Statistics = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    return (
        <div className='flex flex-col justify-center items-center font-bold m-3 '>
            <h1 className="text-2xl text-center mb-3 ">LineChart</h1>
            <LineChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
            <p className='text-xl w-1/2 text-center'>This line chart illustrates the distribution of quiz questions across four topics: JavaScript, CSS, Git, and React. The horizontal axis represents the topic names, while the vertical axis indicates the number of quiz questions.</p>
        </div>
    );
};

export default Statistics;
