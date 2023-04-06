import React from 'react';
import UpperNav from '../UpperNav/UpperNav';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import QuizTopics from '../Quiz/QuizTopics/QuizTopics';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='mt-5'>
            <Header></Header>
            <QuizTopics></QuizTopics>
        </div>
    );
};

export default Home;