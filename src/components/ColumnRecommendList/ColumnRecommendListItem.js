import './ColumnRecommendList.css'
function ColumnRecommendListItem(props) {
    return (
        <div className="column-recommend-list-item">
            <div className="list-item-photo">
                <img src={props.img} alt={''} />
                <p>{props.date} {props.time}</p>
            </div>
            <div className="list-item-description">
                <p className="description-text">{props.description}</p>
                <p className='description-tags'>
                    {props.tags.map(tag => <span>{tag} </span>)}
                </p>
            </div>
        </div>
    )
}

export default ColumnRecommendListItem