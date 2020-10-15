import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Intro.css"

function Intro({id, title, company, content, updatedAt, createdAt}) {
    return(
        <Card id={id}>
            <Card.Header>
                <Link to={{pathname:"#"}}>#{company}</Link>
            </Card.Header>
            <Link to={{
                pathname:`/intro/${id}`,
                state: {id, title, company, content, updatedAt, createdAt}
                }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Intro;