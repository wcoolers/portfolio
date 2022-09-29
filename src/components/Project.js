export const Project = (props) => {
    return (
        <div>
            <div className="project-card">
                <img src={process.env.PUBLIC_URL+`imgs/${props.src}`} alt={props.alt} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <p>Main Tech: {props.tech}</p>
                <div>
                    <button className='project-btn' href={props.siteLink} target="_blank" rel="noreferrer">view project</button>
                    
                </div>
            </div>
        </div>
    )
}
