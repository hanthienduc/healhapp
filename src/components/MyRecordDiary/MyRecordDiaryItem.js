function MyRecordDiaryItem(props) {
    return (
        <div className="diary-item">
            <p className="item-date">{props.date} <br /> {props.time}</p>
            <p className="item-text">{props.text}</p>
        </div>
    )
}

export default MyRecordDiaryItem