import React from "react";
import "./Navigation.css"
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap";

function Navigation() {
    function search() {
        const q = document.getElementById("q").value;
        console.log(q);
        window.location.href = `/search?q=${q}`;
    }

    function enterKey() {
        if(window.event.keyCode === 13) {
            window.event.preventDefault();
            document.getElementById("search").click();
        }
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">자소서</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/write">Write</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" id="q" onKeyDown={enterKey}/>
                <Button variant="outline-info" id="search" onClick={search}>Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation;