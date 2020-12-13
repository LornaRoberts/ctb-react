import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../images/budget_buddy.png";
import "./navBar.css";

class NavBarComponent extends React.Component {

render() {

  let logoSize = {
  width: '5em'
}

let logoMargin = {
  marginLeft: '2em'
}
    return (
        <div className="NavBar">
        <Navbar variant="light" style={{backgroundColor: "#fcd603"}} expand="lg" fixed="top" className="title">
            <Navbar.Brand href="/home"><img src={Logo} alt="Budget Whisperer logo" style={{...logoSize, ...logoMargin}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className="mx-auto"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home" className="Navbar-link">Home</Nav.Link>
                <Nav.Link href="/expenses" className="Navbar-link">Regular Spends</Nav.Link>
                <Nav.Link href="/archive" className="Navbar-link">Archive</Nav.Link>
                <Nav.Link href="/spends" className="Navbar-link">Spending Log</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
}

export default NavBarComponent;
