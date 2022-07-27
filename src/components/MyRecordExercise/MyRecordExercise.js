import './MyRecordExercise.css'
import MyExerciseData from '../../MyExerciseData'
import { useEffect, useState } from 'react'
import MyRecordExerciseItem from './MyRecordExerciseItem'
function MyRecordExercise() {
    const [exerciseData, setExerciseData] = useState()

    useEffect(() => {
        setExerciseData(MyExerciseData[0])
    }, [])
    const exerciseItemElements = exerciseData.exerciseLogs.map((item) => {
        return <MyRecordExerciseItem
            category={item.category}
            type={item.type}
            difficulty_level={item.difficulty_level}
            calories={item.calories}
            duration={item.duration}
        />
    }
    )
    return (
        <div className='my-record-exercise'>
            <h3 className='title'>MY<br />EXERCISE <span className='date'>{exerciseData.date}</span></h3>
            <div className='record-exercise-list'>
                {exerciseItemElements}
            </div>
        </div>
    )
}

export default MyRecordExercise