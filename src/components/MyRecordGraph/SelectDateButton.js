function SelectDateButton(props) {
    return (
        <button onClick={(e) => props.handleClick(e, props.id)}
            className={`date-select-btn ${props.isHeld ? 'button-active' : ''}`}>
            {props.text}
        </button>
    )
}

export default SelectDateButton
