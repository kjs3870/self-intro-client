import React from "react";
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import axios from "axios";
import "./Write.css";
import FuncContent from "../components/FuncContent";

function Write() {
    function createData() {
        const data = {
            title : document.getElementById("title").value,
            company : document.getElementById("company").value,
            content : document.getElementById("content").value
        }

        axios.post("http://localhost:3003/self-intro/", data).then((result) => {
            const {lastInsertId} = result.data;
            window.location.href = `/intro/${lastInsertId}`;
        })
    }

    function goHome() {
        window.location.href = "/";
    }

    function countTextarea() {
        const str = document.getElementById("content").value;
        let len = 0;

        for(let i=0; i<str.length; i++) {
            if(escape(str.charAt(i)).length === 6) len++;
            len++;
        }

        document.getElementById("byteCnt").innerText = len;
        document.getElementById("strCnt").innerText = str.length;
    }

    return (
        <Container>
            <Form>
                <Form.Group as={Col} controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title"/>
                </Form.Group>

                <Form.Group as={Col} md={{span: 4}} controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" name="company"/>
                </Form.Group>

                <Form.Group as={Col} controlId="content">
                    <Row>
                        <Col><Form.Label>Content</Form.Label></Col>
                        <Col>
                            <FuncContent />
                        </Col>
                    </Row>
                    <Form.Control as="textarea" rows="15" placeholder="Enter content" name="content" onKeyUp={countTextarea}/>
                </Form.Group>

                <Form.Group as={Col} id="btns">
                    <Button variant="danger" onClick={goHome}>
                        나가기
                    </Button>
                    
                    <Button variant="primary" onClick={createData}>
                        등록
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Write;