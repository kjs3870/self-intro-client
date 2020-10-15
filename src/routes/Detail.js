import React from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import FuncContent from "../components/FuncContent";
import axios from "axios";
import "./Detail.css";

class Detail extends React.Component {
    state = {
        isLoading : true,
        intro: {}
    }

    componentDidMount() {
        const {location} = this.props;
        const {id} = this.props.match.params;

        if(location.state === undefined) this.getIntro(id);
        else this.setState({isLoading: false, intro:location.state});
    }

    getIntro = async (id) => {
        const {data} = await axios.get(`/self-intro/${id}`);
        this.setState({isLoading: false, intro:data});
    }

    goHome() {
        window.location.href = "/";
    }

    render() {
        const {isLoading, intro} = this.state;
        return (
            <Container>
                {isLoading ? (
                    <div className="loader">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Form>
                        <Form.Group as={Col} controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={intro.title} readOnly/>
                        </Form.Group>

                        <Form.Group as={Col} md={{span: 4}} controlId="company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="email" placeholder="Enter company" value={intro.company} readOnly/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="content">
                            <Row>
                                <Col><Form.Label>Content</Form.Label></Col>
                                <Col>
                                    <FuncContent str={intro.content}/>
                                </Col>
                            </Row>
                            <Form.Control as="textarea" rows="15" placeholder="Enter content" value={intro.content} readOnly/>
                        </Form.Group>

                        <Form.Row id="formRow">
                            <Form.Group as={Col} md={{span:4, offset:4}} controlId="createdAt">
                                <Form.Label>CreatedAt</Form.Label>
                                <Form.Control value={intro.createdAt} readOnly/>
                            </Form.Group>

                            <Form.Group as={Col} md={{span:4}} controlId="updatedAt">
                                <Form.Label>Last UpdatedAt</Form.Label>
                                <Form.Control value={intro.updatedAt} readOnly/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group as={Col} id="btns">
                            <Button variant="secondary" onClick={this.goHome.bind()}>
                                나가기
                            </Button>
                            
                            <Link to={{pathname:`/update/${intro.id}`, state:intro}}>
                                <Button variant="success">
                                    수정
                                </Button>
                            </Link>
                        </Form.Group>
                    </Form>
                )}
            </Container>
        )
    }
}

export default Detail;