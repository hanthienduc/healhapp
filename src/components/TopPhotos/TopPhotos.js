import photoData from "../../photoData"
import PhotoItem from "./PhotoItem"
import './TopPhotos.css'
function TopPhotos() {

    const photoElements = photoData.map(photo =>
        <PhotoItem key={photo.id} img={photo.img} date={photo.date} eatingTime={photo.eatingTime} />
    )

    return (
        <div className="photos-container">
            {photoElements}
        </div>
    )
}

export default TopPhotos