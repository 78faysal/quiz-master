import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const TopicDetails = () => {

    const { topicId } = useParams();
    const [topicDetails, setTopicDetails] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
            .then(response => response.json())
            .then(data => {
                setTopicDetails(data.data)
            })
    }, [topicId]);


    console.log(topicDetails.questions)

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [currectAnswer, setCurrectAnswer] = useState([]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const currentIndex = questions.indexOf(currentQuestion);
        if (currentIndex + 1 < questions.length) {
            setCurrentQuestion(questions[currentIndex + 1]);
            setSelectedOption(null);
        } else {
            // handle end of quiz logic
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(currectAnswer ,selectedOption)

        handleNextQuestion();
    };


    return (
        <div className='mt-5 pt-5 text-center'>
            <img className='img-fluid' src={topicDetails.logo} alt="" />
            <h2>Let's solve this {topicDetails.name} questions</h2>

            <Container>
                <h1>Quiz Questions</h1>
                <Row>
                    {
                        topicDetails.questions?.map(topicDetail => {
                            return (
                                <Col className='mb-5' xs={12} lg={12}>
                                    <h2>Question: {topicDetail.question}</h2>

                                    <Form onSubmit={handleSubmit}>
                                        {
                                            topicDetail.options.map((option) => {
                                                
                                                <Form.Check
                                                    key={option}
                                                    type="radio"
                                                    label={option}
                                                    checked={selectedOption === option}
                                                    // { setCurrectAnswer(option.currectAnswer) }
                                                    onChange={() => handleOptionSelect(option)}
                                                />
                                            })}
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            )
                        })

                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopicDetails;