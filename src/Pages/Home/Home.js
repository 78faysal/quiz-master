import React from 'react';
import UpperNav from '../UpperNav/UpperNav';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import QuizTopics from '../Quiz/QuizTopics/QuizTopics';

const Home = () => {
    return (
        <div>
            <UpperNav></UpperNav>
            <Header></Header>
            <NotFound></NotFound>
            <QuizTopics></QuizTopics>
        </div>
    );
};

export default Home;