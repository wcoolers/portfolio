import { Row, Col, Container } from 'reactstrap';

export const About = () => {
    return (
        <div>
            <Container className="bg-light p-5 rounded-lg mt-3 m-auto">
                <Row>
                    <Col>
                        <h4>About me</h4>
                        <p>Topspeed in water is below 2m/h</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
