import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CustomListItem({ to, src, text, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li><Link to={to} className={'nav-link'}>
            <img src={src} alt={text} />
            <span className={isActive ? 'link-active' : ''}>{text}</span>
        </Link></li>
    )
}

export default CustomListItem