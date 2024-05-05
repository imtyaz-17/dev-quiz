import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

export const TopicsContext = createContext([]);
export
    const Home = () => {
        const topics = useLoaderData();
        console.log(topics);
        const topicsData = topics.data;
        console.log(topicsData);
        return (
            // <TopicsContext.Provider value={topicsData}>
            <div>
                <div className='relative'>
                    <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                    <img className='absolute inset-0 w-full h-full object-cover' src="quiz-banner.jpg" alt="" />
                    <div className='md:min-h-[300px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center'>
                        <h2 className='sm:text-4xl text-2xl font-bold text-sky-400 '>Code. Quiz. Conquer.</h2>
                        <p className='text-lg text-white'>Challenge your coding skills with a variety of engaging quizzes covering different programming languages, frameworks, and concepts. Get instant feedback, track your progress, and compete with other developers!</p>
                    </div>
                </div >
                <div className='grid grid-cols-4 p-6'>
                    {
                        topicsData.map(topic => <TopicCard key={topic.id} topic={topic}></TopicCard>)
                    }
                </div>


            </div>

            // </TopicsContext.Provider>

        );
    };

export default Home;