import { Project } from "./Project"
import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom"

export const Portfolio = () => {
    
    return (
        <Container className="p-5 rounded-lg mt-5 m-auto">
            <Row>
                <Col>
                    <h4 className="text-center mb-3 big">Projects</h4>
                    <div className='projects mb-3'> 
                        
                        <Project 
                            src="lawyers.jpg"
                            alt="illustration of a scale of justice"
                            title="Lawyny Lawyers App"
                            text="Web services with java, spring boot, JPA et al. The frontend is built with thymeleaf."
                            siteLink="https://github.com/wcoolers/java_rest_backend"
                            tech="SpringBoot, REST APIs, Angular."
                        />
                        <Project 
                            src="tasknest.png"
                            alt="illustration of a scale of justice"
                            title="TaskNest IOS App"
                            text="An IOS app that helps students to create custom forecasts for approaching deadlines"
                            siteLink="https://github.com/doh6077/TaskNest"
                            tech="Swift, Firebase Auth, Storage and Database."
                        />
                        <Project 
                            src="dealerships.jpg"
                            alt="illustration of a backpack, headphone and a phone"
                            title="Dealership Management App"
                            text="A car dealership web app built with springboot and angular"
                            siteLink="https://github.com/wcoolers/dealerships_app_springboot-angular"
                            tech="SpringBoot, REST APIs, Angular."
                        />
                        <Project 
                            src="students.jpg"
                            alt="illustration of a backpack, headphone and a phone"
                            title="Student  Registration App"
                            text="A dockerized web app built with Springboot and Angular."
                            siteLink="https://github.com/wcoolers/dockerized_springboot_angular"
                            tech="SpringBoot, Angular, Docker."
                        />
                        <Project 
                            src="vykers.png"
                            alt="screenshot of a website"
                            title="Inventory Mgt System"
                            text="A full stack investory management system for Vykers Automobiles."
                            siteLink="https://vykers.infinityfreeapp.com/index.php"
                            tech="PHP, SQL, Javascript."
                        />
                        
                        <Project 
                            src="leads.png"
                            alt="screenshot of leads chrome extension"
                            title="Chrome Extension"
                            text="A chrome extension that may be used to track online leads. Saving useful tabs for later reference."
                            siteLink="https://github.com/wcoolers/chrome-extension"
                            tech="Chrome Dev API, Javascript, CSS, HTML."
                        />
                        
                        <Project 
                            src="diceFight.png"
                            alt="screenshot of a java app"
                            title="Dice Fight Game"
                            text="A fully functional dice fighting game built with java."
                            siteLink="https://github.com/wcoolers/Dice_Fight/tree/main"
                            tech="Java, JavaFx."
                        />
                        <Project 
                            src="boredBot.png"
                            alt="screenshot of a chrome homepage"
                            title="New Tab Dashboard"
                            text="A boredom helper chrome extension that gives you ideas when you have a boring day."
                            siteLink="https://github.com/wcoolers/boredBot"
                            tech="Chrome Dev API, Javascript."
                        />
                        <Project 
                            src="squidgame2.png"
                            alt="screenshot of website"
                            title="Movie Search App"
                            text="A web app helping users find details about their movies."
                            siteLink="https://moviesearchapp-5bae0.web.app/"
                            tech="React, TMDB API, firebase."
                        />
                        <Project 
                            src="qrcode.png"
                            alt="screenshot of website"
                            title="QR Code Generator"
                            text="A QR code generator. You can click on generated QRcode to download."
                            siteLink="https://wcoolers-qrcode.pages.dev/"
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
                    <p className="limit mx-auto">You may also browse through my github repository <a href="https://www.github.com/wcoolers" className='link' target="_blank" rel="noreferrer">here</a>. Thank you.</p>
                    <p className="limit mx-auto">View some legacy projects <Link tag={Link} to="/legacyPortfolio">here</Link>.</p>
                </Col>
            </Row>
            {/* <Link tag={Link} to="/legacyPortfolio">
                <button  className="hero-btn">View Legacy Projects</button>
            </Link> */}
        </Container>
    )
}
