import { Row, Col, Container } from 'reactstrap';

export const About = () => {
    return (
        <div>
            <Container className="p-5 rounded-lg mt-3 m-auto">
                <Row>
                    <Col>
                        <h4>About Me</h4>
                        <p>Digital art amazes me, and coding is like magic to me. <br /> 
                            I divide my time between writing code, spending time with family and petting my cat, Femi. Well, he is a part of my family! <br />
                            Sports: Top-speed in water (swimming) is below 2km/h. lol. I can also do a few backflips on land.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
