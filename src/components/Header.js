import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const UserContext = React.createContext();

export default function Header() {
  const [isLog, setLog] = useState(false);
  const updateIsLog = (dadosfilho) => {
    setLog(dadosfilho);
  };

  if (isLog === true) {
    return (
      <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>
        <div>
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                PET MATCH
              </Link>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Pppp
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <IoPersonCircleSharp size={30}></IoPersonCircleSharp>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>
        <div>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Link className="navbar-brand" to="/">
                PET MATCH
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </ul>

                  <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  }
}
