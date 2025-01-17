import { Project } from "./Project"
import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"

export const LegacyPortfolio = () => {
    
    return (
        <Container className="p-5 rounded-lg mt-3 m-auto">
            <Row>
                <Col>
                    <h4 className="text-center mb-3 big">Legacy Projects</h4>
                    <div className='projects mb-3'> 
                     
                        <Project 
                            src="dictionary.png"
                            alt="screenshot of website"
                            title="Dictionary App"
                            text="A simple multi-language installable dictionary app."
                            siteLink="https://dictionary-app.pages.dev/"
                            tech="React, API, material-UI."
                        />
                        <Project 
                            src="typer.png"
                            alt="screenshot of website"
                            title="Typing speed tester"
                            text="A typing speed tester app which could be used to improve typing speed."
                            siteLink="https://wcoolers.github.io/typing-speed-tester/"
                            tech="Vanilla JavaScript."
                        />
                       
                        
                        <Project 
                            src="expense-app.png"
                            alt="screenshot of website"
                            title="Expense App"
                            text="A progressive web app for tracking income and expenses."
                            siteLink="https://expense-app-57t.pages.dev/"
                            tech="React, Redux, PWA."
                        />
                     
                        {/* <Project 
                            src="signup.png"
                            alt="screenshot of website"
                            title="Signup Page"
                            text="A sign-up page to accept registration requests from potential users."
                            siteLink="https://wcoolers.github.io/react-login-frontend/"
                            tech="React, CSS."
                        /> */}
                        {/* <Project 
                            src="survey.png"
                            alt="screenshot of website"
                            title="A survey form"
                            text="A survey form useful for collect information for service improvement."
                            siteLink="https://wcoolers.github.io/survey-form/"
                            tech="HTML, CSS."
                        /> */}
                        <Project 
                            src="akinwale.jpeg"
                            alt="screenshot of website"
                            title="Mikeakinwale&Co. LLP"
                            text="A virtual shop for the lawfirm to reach out to clients and provide legal services."
                            siteLink="https://mikeakinwale-co.pages.dev"
                            tech="Javascript, CSS."
                        />
                        <Project 
                            src="akigbogun.png"
                            alt="screenshot of website"
                            title="T. Akigbogun&Co. LLP"
                            text="A virtual shop for the lawfirm to reach out to clients and provide legal services."
                            siteLink="https://akigbogunandco.pages.dev"
                            tech="Javascript, CSS."
                        />
                        {/* <Project 
                            src="akinwale.png"
                            alt="screenshot of website"
                            title="Website for a Lawfirm"
                            text="A virtual shop for a lawfirm to reach out to clients and provide legal services."
                            siteLink="https://michaelakinwale.cf"
                            tech="Wordpress, custom CSS."
                        /> */}
                        {/* <Project 
                            src="blackacre.png"
                            alt="screenshot of website"
                            title="Website for an Estate Firm"
                            text="A virtual shop for a realtor to reach out to more clients towards finding a home."
                            siteLink="https://blackacre.cf"
                            tech="Wordpress, custom CSS."
                        />   */}
                    </div>
                    
                </Col>
            </Row>
            <Link tag={Link} to="/portfolio">
                <button  className="hero-btn">Back to Main Portfolio</button>
            </Link>
        </Container>
    )
}
