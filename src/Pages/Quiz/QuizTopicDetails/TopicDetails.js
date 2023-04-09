import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const TopicDetails = () => {

    const { topicId } = useParams();
    const [topicDetails, setTopicDetails] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
            .then(response => response.json())
            .then(data => {
                console.log('my data',data.data)
                setTopicDetails(data.data)
            })
    }, [topicId]);


    console.log(topicDetails.questions)

    return (
        <div className='mt-5 pt-5 text-center'>
            <img className='img-fluid' src={topicDetails.logo} alt="" />
            <h2>Let's solve this {topicDetails.name} questions</h2>

            <Container>
                <h1>Quiz Questions</h1>
                <Row>
                    {
                        topicDetails.questions.forEach(topicDetail => {
                            console.log(topicDetail)
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopicDetails;