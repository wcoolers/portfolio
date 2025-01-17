import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"



export const Certificate = () => {
    return (
        <div>
            <Container className="p-5 mt-5 m-auto">
                <Row>
                    <Col>
                        
                        <div className="limit">
                            <Link tag={Link} to="/">
                                <button  className="hero-btn">Back Home</button>
                            </Link>
                            <img src={process.env.PUBLIC_URL+`imgs/showcasecert.png`} alt="a showcase certificate" width="100%" height="auto" />
                            
                            
                        </div>  
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
