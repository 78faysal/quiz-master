import React from 'react';

const Statistics = () => {
    return (
        <div className='mt-5 pt-5 container'>
            <div className='mt-5'>
                <h2>What is React Router??</h2>
                <p>React Router is a library for routing in React applications. It enables the navigation between different components or pages of a web application. With React Router, we can define different routes for different components or pages, and navigate to those routes when certain events occur, such as clicking on a link or submitting a form. It is widely used in single-page applications (SPAs) to provide a seamless user experience without refreshing the entire page. React Router provides a simple API that allows developers to handle the routing logic in a declarative way.</p>
            </div>
            <div className='mt-5'>
                <h2>What is contextApi? How does it works?</h2>
                <p>Context API is a feature in React that allows for the sharing of data between components, without the need to pass props manually down the component tree. It provides a way to manage state in a centralized location and easily access it from any component that needs it.
            <br />
                Context API works by creating a context object, which can be accessed by any component in the application. The context object contains a value, which can be any data type, such as an object or a function. The value can be set in a provider component and accessed in any child component that is wrapped by that provider.</p>
            </div>
        </div>
    );
};

export default Statistics;