import { Row, Col, Container } from 'reactstrap';

export const About = () => {
    return (
        <div>
            <Container className="p-5 rounded-lg mt-5 m-auto">
                <Row>
                    <Col className='limit'>
                        <h4 className='typing big'>About <span className='hero-title-accent'>Me</span></h4>
                        <div className='limit'>
                            <p>Digital art amazes me, and coding is like magic to me.
                                I divide my time between writing code, spending time with family and petting my fluffy cat, Femi. Well, he is a part of the family!
                                </p>
                            <p>Sports: Top-speed in water (swimming) is below 0.1km/h 😁. I can also do a few backflips on land 😲.</p>
                            <p>Connect with me on <a className='link' href="https://www.linkedin.com/in/adegoke-a1/" target="_blank" rel="noreferrer">linkedin</a>.</p>
                            <p>Stay safe 👍. </p>
                        </div>
                    </Col>
                    <Col className='about-img-holder'><img className='about-logo' height={300} width='auto' src={process.env.PUBLIC_URL+`imgs/about.jpeg`} alt="cactus inside a cup" /></Col>
                </Row>
            </Container>
        </div>
    )
}
