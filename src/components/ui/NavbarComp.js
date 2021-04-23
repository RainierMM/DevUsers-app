import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

export const NavbarComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DevUsers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Listar</Nav.Link>
          <Nav.Link href="/register">Registrar</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </>
  );
};
