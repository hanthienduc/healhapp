function MyRecordExerciseItem(props) {
    return (
        <div className="my-record-exercise-item">
            <p className="exercise-item-title">

                <span className="title-left">
                    <span className="dot">● </span>
                    {props.category} {`(${props.type}${props.difficulty_level})`}
                </span>
                <span className="title-right">
                    {props.duration} min
                </span>
            </p>
            <p className="calories">
                {props.calories}kcal
            </p>
        </div>
    )
}

export default MyRecordExerciseItem