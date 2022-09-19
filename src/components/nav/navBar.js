import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './cl.PNG';
import grid from './grd.png';
import que from './que.png';
import bel from './bell.png';
import avtar from './avt.png';
import './style.css'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width={28}
                        height={28}
                        className="d-inline-block align-top"
                    />{' '}
                    <span>Studioz</span>
                </Navbar.Brand>
            </Container>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className='d-fl'>
                    <Nav.Link href="#action1">
                        <img
                            alt=""
                            src={grid}
                            width={25}
                            height={25}
                            className="d-inline-block align-top"
                        />
                        {' '}</Nav.Link>
                    <Nav.Link href="#action1">
                        <img
                            alt=""
                            src={bel}
                            width={25}
                            height={25}
                            className="d-inline-block align-top"
                        />
                        {' '}</Nav.Link>
                    <Nav.Link href="#action1">
                        <img
                            alt=""
                            src={que}
                            width={25}
                            height={25}
                            className="d-inline-block align-top"
                        />
                        {' '}</Nav.Link>
                    <Nav.Link href="#action1">
                        <img
                            alt=""
                            src={avtar}
                            width={25}
                            height={25}
                            className="d-inline-block align-top"
                        />
                        {' '}</Nav.Link>
                </div>
            </Nav>
        </Navbar>
    )
}

export default NavBar