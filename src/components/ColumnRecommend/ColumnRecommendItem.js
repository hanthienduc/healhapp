import './ColumnRecommend.css'

function ColumnRecommendItem({ title, subtitle }) {
    return (
        <div className="recommend-item">
            <p className="item-title">{title}</p>
            <div className="break" />
            <p className="item-subtitle">{subtitle}</p>
        </div>
    )
}

export default ColumnRecommendItem