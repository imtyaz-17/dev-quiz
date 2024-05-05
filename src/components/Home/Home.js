import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div className='relative'>
            <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
            <img className='absolute inset-0 w-full h-full object-cover' src="quiz-banner.jpg" alt="" />
            <div className="md:min-h-[300px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-3">
                <h2 className="sm:text-4xl text-2xl font-bold text-sky-400 mb-6">Code. Quiz. Conquer.</h2>
                <p className="text-lg text-white">Challenge your coding skills with a variety of engaging quizzes covering different programming languages, frameworks, and concepts. Get instant feedback, track your progress, and compete with other developers!</p>
            </div>

            {/* {
                topics.map(topic => <TopicCard key={topic.id}></TopicCard>)
            } */}
        </div >
    );
};

export default Home;