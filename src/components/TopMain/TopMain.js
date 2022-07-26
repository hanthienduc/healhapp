import d01 from '../../assets/top-main/d01.jpg'
import './TopMain.css'
function TopMain() {
    return (
        <main className="main">
            <div className="main-photo">
                <img src={d01} alt={'d01'} />
            </div>
            <div className="main-graph">
                <h1>Graph</h1>
            </div>
        </main>
    )
}

export default TopMain