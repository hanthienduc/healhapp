import './MyRecordDiary.css'
import MyRecordDiaryItem from './MyRecordDiaryItem'
import MyRecordDiaryData from '../../MyRecordDiaryData'

function MyRecordDiary() {

    const diaryElements = MyRecordDiaryData.map(diaryItem => (
        <MyRecordDiaryItem key={diaryItem.id}
            date={diaryItem.date}
            time={diaryItem.time}
            text={diaryItem.text} />
    ))

    return (
        <>
            <h1 className='diary-title'>MY DIARY</h1>
            <div className='my-record-diary'>
                {diaryElements}
            </div>
        </>

    )
}

export default MyRecordDiary