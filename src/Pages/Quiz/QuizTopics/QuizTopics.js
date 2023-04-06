import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const QuizTopics = () => {
    const [topics, setTopics] = useState([])


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setTopics(data.data))
    }, [])
    return (
        <div>
            <div className="topics mt-5 pt-5">
                <div className="container">
                    <h2 className='text-center p-2'>Our Courses</h2>
                    <div className="row">
                        {topics.map(topic => (
                            <div key={topic.id} className="col-lg-3 col-md-6 mb-4">
                                <Card>
                                    <Card.Img className='bg-secondary' variant="top" src={topic.logo} alt={topic.name} />
                                    <Card.Body>
                                        <Card.Title>{topic.name}</Card.Title>
                                        <Button variant="primary">See More</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;