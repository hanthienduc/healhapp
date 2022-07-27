function MyRecommendItem(props) {
    return (
        <div className="recommend-item">
            <img src={props.img} alt={props.title} />
            <div className="recommend-description">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default MyRecommendItem