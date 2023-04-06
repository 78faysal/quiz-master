import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Photos/logo.png';
import { Link, NavLink } from 'react-router-dom';

const UpperNav = () => {
    return (
        <div>
            <Navbar style={{backgroundColor: "#e3f3ff"}} collapseOnSelect fixed='top' shadow="bottom" className='text-dark' expand="md" bg="" variant="dark">
                <Container>
                    <Navbar.Brand className='text-dark' href="/home">
                        <img
                            alt=""
                            src={logo}
                            width="180"
                            className="d-inline-block"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-secondary' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className='text-dark p-2 text-decoration-none' to="/topics">Topics</NavLink>
                            <NavLink className='text-dark p-2 text-decoration-none' to="/statistics">Statistics</NavLink>
                            <NavLink className='text-dark p-2 text-decoration-none' to="/blogs">Blogs</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default UpperNav;