import React from "react";
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import FuncContent from "../components/FuncContent";
import axios from "axios";

class Update extends React.Component {
    componentDidMount() {
        const { location, match} = this.props;
        const {id} = match.params;
        if(location.state === undefined) window.location.href = `/intro/${id}`
    }

    updateData(id) {
        const data = {
            title : document.getElementById("title").value,
            company : document.getElementById("company").value,
            content : document.getElementById("content").value
        }

        axios.put(`/api/self-intro/${id}`, data).then(() => {
            window.location.href = `/intro/${id}`;
        });
    }

    deleteData(id) {
        axios.delete(`/api/self-intro/${id}`).then(() => {
            window.location.href = "/";
        });
    }

    cancelUpdate() {
        window.history.back();
    }

    countTextarea() {
        const str = document.getElementById("content").value;
        let len = 0;

        for(let i=0; i<str.length; i++) {
            if(escape(str.charAt(i)).length === 6) len++;
            len++;
        }

        document.getElementById("byteCnt").innerText = len;
        document.getElementById("strCnt").innerText = str.length;
    }

    render() {
        const {location} = this.props;
        const intro = location.state;
        
        if(intro) {
            return (
                <Container>
                    <Form>
                        <Form.Group as={Col} controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" defaultValue={intro.title}/>
                        </Form.Group>

                        <Form.Group as={Col} md={{span: 4}} controlId="company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" name="company" defaultValue={intro.company}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="content">
                            <Row>
                                <Col><Form.Label>Content</Form.Label></Col>
                                <Col>
                                    <FuncContent str={intro.content}/>
                                </Col>
                            </Row>
                            <Form.Control as="textarea" rows="15" name="content" defaultValue={intro.content} onKeyUp={this.countTextarea.bind()}/>
                        </Form.Group>

                        <Form.Group as={Col} id="btns">
                            <Button variant="secondary" onClick={this.cancelUpdate.bind()}>
                                취소
                            </Button>

                            <Button variant="danger" onClick={this.deleteData.bind(null, intro.id)}>
                                삭제
                            </Button>
                            
                            <Button variant="primary" onClick={this.updateData.bind(null, intro.id)}>
                                수정
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
            );
        }
        else return null;
    }
}

export default Update;