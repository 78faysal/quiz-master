import React from 'react';
import bgImg from '../../Photos/homeImg.jpg';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('${bgImg}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    height: "100vh",
                }}
            >
                <Container className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h1 className="text-white mb-4">Welcome to Quiz Master</h1>
                    <Form className="w-50">
                        <FormControl type="text" placeholder="Search for something" className="mr-sm-2" />
                        <Button className='mt-2' variant="danger" type="submit">
                            Search
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Header;