import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavbarComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DevUsers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Listar</Nav.Link>
          <Nav.Link href="/register">Registrarse</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
