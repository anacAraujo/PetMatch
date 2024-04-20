import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../context/UserContext';

export default function Header() {
  const userContext = React.useContext(UserContext);

  if (userContext.isLogged) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              PET MATCH
            </Link>

            <Navbar.Collapse id="responsive-navbar-nav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavDropdown title="Breeds" id="basic-nav-dropdown">
                    <Link to={'/breedinfo/cat/Abyssinian'} style={{ textDecoration: 'none' }}>
                      <NavDropdown.Item as={'span'}>Catss</NavDropdown.Item>
                    </Link>
                    <Link to={'/breedinfo/dog/Affenpinscher'} style={{ textDecoration: 'none' }}>
                      <NavDropdown.Item as={'span'}>Dogs</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/profile/">
                    <IoPersonCircleSharp size={30}></IoPersonCircleSharp>
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  } else {
    return (
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
                    <NavDropdown title="Breeds" id="basic-nav-dropdown">
                      <Link to={'/breedinfo/cat/Abyssinian'} style={{ textDecoration: 'none' }}>
                        <NavDropdown.Item as={'span'}>Catss</NavDropdown.Item>
                      </Link>
                      <Link to={'/breedinfo/dog/Affenpinscher'} style={{ textDecoration: 'none' }}>
                        <NavDropdown.Item as={'span'}>Dogs</NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </Nav>

              <Nav>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}
