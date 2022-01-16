
import { Button } from 'reactstrap';

export const Project = (props) => {
    console.log(props.src)
    return (
        <div>
            <div className="project-card">
                <img src={props.src} alt={props.alt} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <div>
                    <Button href={props.siteLink} target="_blank" color="danger">view project</Button>
                    
                </div>
            </div>
        </div>
    )
}
