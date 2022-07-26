import CustomButton from "./CustomButton"
import icon_knife from "../../assets/top-main/icon_knife.png"
import icon_cup from "../../assets/top-main/icon_cup.png"
import './TopButton.css'
function TopButton() {
    return (
        <div className="button-container">
            <CustomButton left={26} src={icon_knife} text={'Morning'} />
            <CustomButton src={icon_knife} text={'Lunch'} />
            <CustomButton src={icon_knife} text={'Dinner'} />
            <CustomButton src={icon_cup} text={'Snack'} />
        </div>
    )
}

export default TopButton