import { useEffect, useState } from 'react'
import component_scroll from '../../assets/component_scroll.png'
import './MoveTop.css'
function MoveTop() {

    const [buttonStyle, setButtonStyle] = useState({
        display: 'none'
    })
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setButtonStyle({ display: "block" });
            } else {
                setButtonStyle({ display: "none" });
            }
        }
    })
    function handleClick() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return (
        <div onClick={handleClick} className="move-top" style={buttonStyle}>
            <img src={component_scroll} alt="move top" />
        </div>
    )
}

export default MoveTop