import { Row, Col, Container } from 'reactstrap';

export const About = () => {
    return (
        <div>
            <Container className="p-5 rounded-lg mt-3 m-auto">
                <Row>
                    <Col>
                        <h4>About Me</h4>
                        <p className='limit'>Digital art amazes me, and coding is like magic to me.
                            I divide my time between writing code, spending time with family and petting my fluffy cat, Femi. Well, he is a part of the family!
                            </p>
                        <p className='limit'>Sports: Top-speed in water (swimming) is below 1km/h 😁. I can also do a few backflips on land 😲.</p>
                        <p>Connect with me on <a className='link' href="https://www.twitter.com/khentebe" target="_blank" rel="noreferrer">twitter</a> and <a className='link' href="https://www.linkedin.com/in/adegoke-a1/" target="_blank" rel="noreferrer">linkedin</a>.</p>
                        <p>Stay safe 👍. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
