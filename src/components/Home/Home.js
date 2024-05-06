import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

export const TopicsContext = createContext([]);

const Home = () => {
    const topics = useLoaderData();
    console.log(topics);
    const topicsData = topics.data;
    console.log(topicsData);
    return (
        <div className="bg-gray-100">
            <div className='relative'>
                <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                <img className='absolute inset-0 w-full h-full object-cover' src="quiz-banner.jpg" alt="" />
                <div className='md:min-h-[300px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-4 '>
                    <h2 className='sm:text-4xl text-2xl font-bold text-sky-400 my-2'>Code. Quiz. Conquer.</h2>
                    <p className='text-lg text-white my-2'>Challenge your coding skills with a variety of engaging quizzes covering different programming languages, frameworks, and concepts. Get instant feedback, track your progress, and compete with other developers!</p>
                </div>
            </div>
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {topicsData.map(topic => (
                        <TopicCard key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
