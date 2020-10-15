import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Intro.css"

function Intro({id, title, company, content, updatedAt, createdAt}) {
    if(title===null) title=undefined;
    if(company===null) company=undefined;
    if(content===null) content=undefined;
    
    return(
        <Card id={id}>
            <Card.Header>
                #<a href={`/search?q=${company}`}>{company}</a>
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