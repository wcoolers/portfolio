import { Button, Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Hero = () => {
    return (
        <div>
            <Container className="p-5 rounded-lg mt-3 m-auto">
                <Row>
                    <Col>
                        <h1>Frontend Web Developer</h1>
                        <p>A frontend web developer with technical skills in JavaScript, React, CSS, <br />  Git amongst others. I also have exposure to backend services (nodejs & express) and the cloud. <br /> Sometimes, I create on-the-go beautiful websites with WordPress.</p>
                        <p>Overall, l can design and develop web apps using the latest frontend technologies <br />to bring products to life.</p>
                        <p>
                            <Button tag={Link} to="/portfolio" color="danger">See my work</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
