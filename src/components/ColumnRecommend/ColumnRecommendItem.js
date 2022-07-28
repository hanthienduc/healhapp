import './ColumnRecommend.css'

function ColumnRecommendItem({ id, title, subtitle, handleSelectCategory }) {
    return (
        <div onClick={(e) => handleSelectCategory(e, id)} className="recommend-item">
            <p className="item-title">{title}</p>
            <div className="break" />
            <p className="item-subtitle">{subtitle}</p>
        </div>
    )
}

export default ColumnRecommendItem