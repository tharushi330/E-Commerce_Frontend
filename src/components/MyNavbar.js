import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart, FaList } from 'react-icons/fa';
import Logo from "../assets/MyGiftHut logo.png";

function MyNavbar() {
  return (
    <>
      <BootstrapNavbar bg="light" expand="lg" className="py-3 border-bottom">
        <Container>
          <BootstrapNavbar.Brand href="#">
            <img
              src={Logo}
              alt="Logo"
              height="50"
            />
          </BootstrapNavbar.Brand>

          <Form className="d-flex mx-auto w-50">
            <FormControl type="search" placeholder="Search for anything..." className="me-2" />
            <Button variant="success">
              <FaSearch />
            </Button>
          </Form>

          <div className="text-end">
            <div className="d-none d-md-block text-dark fw-bold">Happiness Hotline<br />011 2001122</div>
          </div>

          <Nav className="ms-3">
            <Nav.Link href="#"><FaUser /> Account</Nav.Link>
            <Nav.Link href="#" className="position-relative">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                1
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>

      <BootstrapNavbar style={{ backgroundColor: '#f8c6da' }}>
        <Container>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaList /> Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Gift Pack</Dropdown.Item>
              <Dropdown.Item href="#">Flowers</Dropdown.Item>
              <Dropdown.Item href="#">Cakes</Dropdown.Item>
              <Dropdown.Item href="#">Toys</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav className="ms-3">
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Gift Packs</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Flowers</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Cakes</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Toys</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Contact</Nav.Link>
          </Nav>


          <Button variant="success" className="ms-auto">Order Status</Button>
        </Container>
      </BootstrapNavbar>
    </>
  );
}

export default MyNavbar;
