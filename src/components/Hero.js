import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Hero = () => {
    return (
        <div>
            <Container className="p-5 mt-5 m-auto">
                <Row>
                    <Col>
                        <h1 className='hero-title typing'>Software <span className='hero-title-accent'>Developer</span></h1>
                        <div className="limit">
                            <p>A curious mind and a software developer student at Sheridan College, with technical skills in Java, SpringBoot, C#, PHP, Python, Nodejs, JavaScript, Angular, React, CSS, HTML, XML, Bash, Git, SQL, No SQL databases amongst others. 
                                </p>
                            <p>Overall, l can design and develop web apps using the latest technologies to bring products to life.</p>
                            <p><b>PS</b>. <br></br> l have hands-on experience researching and developing machine learning models such as VAEs, GANs, DDPM <i>et al</i>, through my experience working with the <b>Center for Applied Artificial Intelligence</b> (CAAI), Sheridan College.</p>
                            <p className="limit mx-auto">See recognition <a href="showcasecert.png" className='link'>here</a>.</p>
                            <Link tag={Link} to="/portfolio">
                                <button  className="hero-btn">Explore!</button>
                            </Link>
                        </div>  
                    </Col>
                    <Col className='hero-logo'><img src={process.env.PUBLIC_URL+`imgs/laptop.svg`} alt="an svg illustration of a laptop computer" /></Col>
                </Row>
            </Container>
        </div>
    )
}
