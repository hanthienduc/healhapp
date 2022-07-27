function PhotoItem(props) {
    return (
        <div className="photo-item">
            <img src={props.img} alt={props.eatingTime} />
            <p>{new Date(props.date).getMonth() + 1}.
                {+ new Date(props.date).getDate()}
                -{props.eatingTime}</p>
        </div>
    )
}

export default PhotoItem