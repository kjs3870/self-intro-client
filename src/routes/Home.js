import React from "react";
import Intro from "../components/Intro";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Loader from "../components/Loader";

class Home extends React.Component {
    state = {
        isLoading: true,
        intros: []
    }

    getIntros = async () => {
        const {data} = await axios.get("/api/self-intro/");
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
                    <Loader />
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