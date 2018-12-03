import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css'

export default class CustomNavbar extends Component {
    render() {
      return (
        <Navbar default collapseOnSelect className="navv">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="logo">Blink</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Create a Meeting
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/Join" to="/Join">
                Join a Meeting
              </NavItem>
             
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }