import { Link } from 'react-router-dom'

function CustomListItem({ to, src, text }) {
    return (
        <li><Link to={to} className="nav-link">
            <img src={src} alt={text} />
            <span>{text}</span>
        </Link></li>
    )
}

export default CustomListItem