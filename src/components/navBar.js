import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBarComponent extends React.Component {

render() {
    return (
        <div className="NavBar">
        <Navbar variant="light" style={{backgroundColor: "teal"}} expand="lg" fixed="top" className="title">
            <Navbar.Brand href="/x">BudgetBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav" style={{position: 'absolute', left: '40%'}}>
                <Nav.Link href="/x">Home</Nav.Link>
                <Nav.Link href="/x">Regular Spends</Nav.Link>
                <Nav.Link href="/x">Arvchive</Nav.Link>
                <Nav.Link href="/x">Spending Log</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
}

export default NavBarComponent;