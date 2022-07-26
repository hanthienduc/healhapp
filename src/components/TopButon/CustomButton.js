export default function CustomButton({ src, text, left }) {
    return (
        <div className="hexagon-container">
            <div className="hexagon"></div>
            <img className="button-icon" src={src} alt={text} />
            <span style={{ left: left ? `${left}px` : '' }} className="button-text">{text}</span>
        </div>


    )
}
