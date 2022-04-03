import { Project } from "./Project"
import { Row, Col, Container } from 'reactstrap';

export const Portfolio = () => {
    
    return (
        <Container className="p-5 rounded-lg mt-3 m-auto">
            <Row>
                <Col>
                    <h4 className="text-center mb-3">A few of my frontend apps</h4>
                    <div className='projects mb-3'>
                        <Project 
                            src="moviesearch.png"
                            alt="screenshot of website"
                            title="Movie Search App"
                            text="A web app helping users to find details about their choice movies."
                            siteLink="https://moviesearchapp-5bae0.web.app/"
                            tech="React, API, CSS, firebase"
                        />
                        <Project 
                            src="expense-app.png"
                            alt="screenshot of website"
                            title="Expense App"
                            text="A progressive web app (PWA) for tracking income and expenses. Installable on phones and desktop"
                            siteLink="https://expense-app-57t.pages.dev/"
                            tech="React, Redux, CSS, PWA, Cloudflare"
                        />
                        <Project 
                            src="musicapp.png"
                            alt="screenshot of website"
                            title="Music Streaming App"
                            text="A web app for streaming and downloading patented music."
                            siteLink="https://www.coolersmusic.com"
                            tech="Wordpress, API, custom CSS"
                        />
                        <Project 
                            src="signup.png"
                            alt="screenshot of website"
                            title="Signup Page"
                            text="A simple sign-up page to accept resgistration requests from potential users of a website."
                            siteLink="https://wcoolers.github.io/react-login-frontend/"
                            tech="React, CSS"
                        />
                        <Project 
                            src="akinwale.png"
                            alt="screenshot of website"
                            title="Website for a Lawfirm"
                            text="A virtual shop for a lawfirm to reach out to clients and provide legal services."
                            siteLink="https://michaelakinwale.cf"
                            tech="Wordpress, custom CSS"
                        />
                        <Project 
                            src="blackacre.png"
                            alt="screenshot of website"
                            title="Website for an Estate Firm"
                            text="A virtual shop for an estate firm to reach out to more people towards finding a home."
                            siteLink="https://blackacre.cf"
                            tech="Wordpress, custom CSS"
                        />
                        <Project 
                            src="typer.png"
                            alt="screenshot of website"
                            title="Typing speed tester"
                            text="A typing speed tester app which could be used to improve typing speed."
                            siteLink="https://wcoolers.github.io/typing-speed-tester/"
                            tech="Vanilla JavaScript"
                        />
                        <Project 
                            src="survey.png"
                            alt="screenshot of website"
                            title="A survey form"
                            text="A simple survey form that may be used to collect information from users for service improvement and analytics."
                            siteLink="https://wcoolers.github.io/survey-form/"
                            tech="HTML, CSS"
                        />   
                    </div>
                    <p className="limit mx-auto">Please browse through my <a href="https://www.github.com/wcoolers" target="_blank" rel="noreferrer">github repos</a> for some of my locally deployable projects, such as chrome extensions (javascript), Commandline Password Generator(nodejs) etc. Thank you.</p>
                </Col>
            </Row>
        </Container>
    )
}
