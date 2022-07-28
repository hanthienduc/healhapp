import { Link } from "react-router-dom"

function CustomDropDownListItem({ handleClick, to, title }) {
    return (
        <li onClick={handleClick}><Link to={to}>{title}</Link></li>
    )
}

export default CustomDropDownListItem