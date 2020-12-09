import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBarComponent extends React.Component {

render() {
    return (
        <div className="NavBar">
        <Navbar variant="light" style={{backgroundColor: "teal"}} expand="lg" fixed="top" className="title">
            <Navbar.Brand href="/home">BudgetBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav" style={{position: 'absolute', left: '40%'}}>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/regularspends">Regular Spends</Nav.Link>
                <Nav.Link href="/archive">Arvchive</Nav.Link>
                <Nav.Link href="/spends">Spending Log</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
}

export default NavBarComponent;