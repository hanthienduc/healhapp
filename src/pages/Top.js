import TopButton from "../components/TopButon/TopButton"
import TopMain from "../components/TopMain/TopMain"
import TopPhotos from "../components/TopPhotos/TopPhotos"
import SeeMoreButton from '../components/SeeMoreButton/SeeMoreButton'
import './Top.css'
function Top() {

    return (
        <main className="top">
            <TopMain />
            <TopButton />
            <TopPhotos />
            <SeeMoreButton />
        </main>
    )
}

export default Top