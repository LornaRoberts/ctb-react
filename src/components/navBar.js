import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
    return (
        <div className="NavBar">
        <Navbar variant="light" style={{backgroundColor: "teal"}} expand="lg" fixed="top" className="title">
            <Navbar.Brand href="/home">BudgetBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav" style={{position: 'absolute', left: '40%'}}>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/expenses">Regular Spends</Nav.Link>
                <Nav.Link href="/archive">Archive</Nav.Link>
                <Nav.Link href="/spends">Spending Log</Nav.Link>
                {this.state.loggedIn && <LogOut />}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
}

export default NavBarComponent;
