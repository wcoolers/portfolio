import { Button, Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Hero = () => {
    return (
        <div>
            <Container className="bg-light p-5 rounded-lg mt-3 m-auto">
                <Row>
                    <Col>
                        <h1>Frontend Web Developer</h1>
                        <p>A self-taught frontend web developer with technical skills in JavaScript,<br /> React, Python, CSS, Bootstrap, MongoDB, Git amongst others. <br /> I also create beautiful websites with WordPress.</p>
                        <p>l currently hold the Responsive Web Design Developer Certificate <br /> 
                        and I am open to opportunities to create digital magic!</p>
                        <p>
                            <Button tag={Link} to="/portfolio" color="danger">
                                See my work
                            </Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
