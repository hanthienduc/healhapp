function PhotoItem(props) {
    return (
        <div className="photo-item">
            <img src={props.img} alt={props.eatingTime} />
            <p>{props.date}-{props.eatingTime}</p>
        </div>
    )
}

export default PhotoItem