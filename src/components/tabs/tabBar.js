import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './style.css'

function TabBar() {
    return (
        // <Navbar bg="dark" variant="dark">
        <div style={{ backgroundColor: '#34495E', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link active href="/home" style={{ color: '#fff', fontWeight: 'bold', borderBottomWidth: 3, borderBottomColor: 'yellow' }}>CARTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={false} eventKey="link-1">FAVORITES</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default TabBar