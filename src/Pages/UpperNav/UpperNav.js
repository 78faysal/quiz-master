import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Photos/logo.png';

const UpperNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' shadow="bottom" className='text-dark' expand="md" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand className='text-dark' href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            className="d-inline-block"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-secondary' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className='text-dark fw-bold' href="#about">About</Nav.Link>
                            <Nav.Link className='text-dark' href="#services">Services</Nav.Link>
                            <Nav.Link className='text-dark' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default UpperNav;