import React from "react";
import Intro from "../components/Intro";
import {Container, Row, Col, Spinner} from "react-bootstrap";
import axios from "axios";
import "./Home.css"

class Home extends React.Component {
    state = {
        isLoading: true,
        intros: []
    }

    getIntros = async () => {
        const {data} = await axios.get("http://localhost:3003/self-intro/");
        this.setState({intros: data, isLoading:false});
    }

    componentDidMount() {
        this.getIntros();
    }

    render() {
        const {isLoading, intros} =this.state;
        return (
            <Container>
                {isLoading ? (
                    <div className="loader">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Row xs={1} md={2} className="intros">
                        {intros.map((intro) => {
                            return (
                                <Col key={intro.id}>
                                    <Intro
                                        key = {intro.id}
                                        id = {intro.id}
                                        title = {intro.title}
                                        company = {intro.company}
                                        content = {intro.content}
                                        createdAt = {intro.createdAt}
                                        updatedAt = {intro.updatedAt}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        )
    }
}

export default Home;