import { Button, Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Hero = () => {
    return (
        <div>
            <Container className="p-5 mt-5 m-auto">
                <Row>
                    <Col>
                        <h1 className='hero-title'>Frontend Web <span className='hero-title-accent'>Developer</span></h1>
                        <div className="limit">
                            <p>A frontend web developer with technical skills in JavaScript, React, CSS, Git amongst others. I also have exposure to backend services (nodejs & express) and the cloud. Sometimes, I create on-the-go beautiful websites with WordPress.</p>
                            <p>Overall, l can design and develop web apps using the latest frontend technologies to bring products to life.</p>
                            <p>
                                <Button tag={Link} to="/portfolio" className="hero-btn">See my work</Button>
                            </p>
                        </div>  
                    </Col>
                    <Col className='hero-logo'><img src={process.env.PUBLIC_URL+`imgs/laptop.svg`} alt="" /></Col>
                </Row>
            </Container>
        </div>
    )
}
