
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>CopyRights &#169; 2021</p>
            <Link to="/about">About Me</Link>
            <br></br>
            <Link to="/contactus">Contact Us!</Link>
        </footer>
    )
}

export default Footer
