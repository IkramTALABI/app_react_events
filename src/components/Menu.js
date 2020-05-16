import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';

class Menu extends React.Component{
    render(){
        return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">App Events+weather</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default Menu;