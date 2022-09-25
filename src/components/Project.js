
import { Button } from 'reactstrap'
// import image from "../../public/imgs"

export const Project = (props) => {
    return (
        <div>
            <div className="project-card">
                <img src={process.env.PUBLIC_URL+`imgs/${props.src}`} alt={props.alt} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <p>Main Tech: {props.tech}</p>
                <div>
                    <Button href={props.siteLink} target="_blank" rel="noreferrer">view project</Button>
                    
                </div>
            </div>
        </div>
    )
}
