import TopButton from "../components/TopButon/TopButton"
import TopMain from "../components/TopMain/TopMain"
import TopPhotos from "../components/TopPhotos/TopPhotos"

function Top() {

    return (
        <div className="top">
            <TopMain />
            <TopButton />
            <TopPhotos />
        </div>
    )
}

export default Top