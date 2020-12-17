import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../images/boostlogodesign.png";
import "./navBar.css";

import LogOut from './Home/LogOut';

class NavBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };

    }

    componentDidMount(){
        const retrievedUser = window.localStorage.getItem('userObj');
        if (retrievedUser) {
          this.setState({
              loggedIn: true
            });
        }
    }

render() {

  let logoSize = {
  width: '12em'
}

let logoMargin = {
  marginLeft: '2em',
  marginTop: '-2em'
}
    return (
        <div className="NavBar">
        <Navbar variant="light" style={{backgroundColor: "#fcd603"}} expand="lg" fixed="top" className="title">
            <Navbar.Brand className="Logo" href="/home"><img src={Logo} alt="Budget Whisperer logo" style={{...logoSize, ...logoMargin}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className="mx-auto"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home" className="Navbar-link">Home</Nav.Link>
                <Nav.Link href="/expenses" className="Navbar-link">Regular Expenses</Nav.Link>
                <Nav.Link href="/spends" className="Navbar-link">Spending Log</Nav.Link>
                <Nav.Link href="/archive" className="Navbar-link">Archive</Nav.Link>
                <span className="login">{this.state.loggedIn && <LogOut />}</span>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
}

export default NavBarComponent;
