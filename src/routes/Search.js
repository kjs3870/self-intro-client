import React from "react";
import Intro from "../components/Intro";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Loader from "../components/Loader";

class Search extends React.Component {
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
        console.log(this.props);
    }

    render() {
        const {isLoading, intros} =this.state;
        const uri = decodeURI(this.props.location.search);
        const search = uri.split("=")[1]

        return (
            <Container>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Row xs={1} md={2} className="intros">
                        {intros.map((intro) => {
                            try{
                                if(intro.company.includes(search)) {
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
                                }
                                else return null;
                            } catch(e) {
                                return null;
                            }
                        })}
                    </Row>
                )}
            </Container>
        )
    }
}

export default Search;