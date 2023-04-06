import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicDetails = () => {

    const {topicId} = useParams();
    const [topicDetails, setTopicDetails] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
            .then(response => response.json())
            .then(data => setTopicDetails(data.data))
    }, [])

    return (
        <div className='mt-5'>
            <h2>this is topic details</h2>
        </div>
    );
};

export default TopicDetails;