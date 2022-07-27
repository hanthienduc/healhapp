import MyRecommendItem from "./MyRecommendItem"
import MyRecommendOne from '../../assets/recommend/MyRecommend-1.jpg'
import MyRecommendTwo from '../../assets/recommend/MyRecommend-2.jpg'
import MyRecommendThree from '../../assets/recommend/MyRecommend-3.jpg'
import './MyRecordRecommend.css'
function MyRecordRecommend() {

    return (
        <div className="my-record-recommend">
            <MyRecommendItem img={MyRecommendOne} title="BODY RECORD" description={'自分のカラダの記録'} />
            <MyRecommendItem img={MyRecommendTwo} title="MY EXERCISE" description={'自分の運動の記録'} />
            <MyRecommendItem img={MyRecommendThree} title="MY DIARY" description={'自分の日記'} />
        </div>
    )
}

export default MyRecordRecommend