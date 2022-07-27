import MyRecordDiary from "../components/MyRecordDiary/MyRecordDiary"
import MyRecordExercise from "../components/MyRecordExercise/MyRecordExercise"
import MyRecordGraph from "../components/MyRecordGraph/MyRecordGraph"
import MyRecordRecommend from "../components/MyRecordRecommend/MyRecordRecommend"
import './MyRecord.css'
function MyRecord() {

    return (
        <div className="my-record">
            <MyRecordRecommend />
            <MyRecordGraph />
            <MyRecordExercise />
            <MyRecordDiary />
        </div>
    )
}

export default MyRecord