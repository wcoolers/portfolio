import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Hero = () => {
    return (
        <div>
            <Container className="p-5 mt-5 m-auto">
                <Row>
                    <Col>
                        <h1 className='hero-title'>Software <span className='hero-title-accent'>Developer</span></h1>
                        <div className="limit">
                            <p>A curious mind and a software developer student at Sheridan College, with technical skills in Java, SpringBoot, PHP, Python, Nodejs, JavaScript, React, CSS, HTML, XML, Bash, Git, SQL, No SQL databases amongst others. 
                                </p>
                            <p>Overall, l can design and develop web apps using the latest technologies to bring products to life.</p>
                            <Link tag={Link} to="/portfolio">
                                <button  className="hero-btn">See some of my work</button>
                            </Link>
                        </div>  
                    </Col>
                    <Col className='hero-logo'><img src={process.env.PUBLIC_URL+`imgs/laptop.svg`} alt="" /></Col>
                </Row>
            </Container>
        </div>
    )
}
