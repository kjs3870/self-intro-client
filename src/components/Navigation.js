import React from "react";
import "./Navigation.css"
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap";

function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">자소서</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/write">Write</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation;