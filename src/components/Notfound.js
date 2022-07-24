import { Link} from "react-router-dom"

export const Notfound = () => {
    return (
        <div className="p-5 rounded-lg mt-3 m-auto">
            <p>Oops... you have landed on a page that doesn't exist. <br />It is not you, it is me. Please browse through <Link to="/portfolio">my work</Link></p>
        </div>
    )
}
