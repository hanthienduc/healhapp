import { useContext } from 'react'
import { ColumnRecommendContext } from '../../context/ColumnRecommendContext'
import { nanoid } from 'nanoid'
import ColumnRecommendItem from './ColumnRecommendItem'

function ColumnRecommend() {
    const context = useContext(ColumnRecommendContext)
    const recommendCategoriesElement = context.recommendCategories?.map(category => (
        <ColumnRecommendItem
            handleSelectCategory={context.handleSelectCategory}
            key={nanoid()}
            id={category.id}
            title={category.title}
            subtitle={category.subtitle} />
    ))

    return (
        <div className="column-recommend">
            {recommendCategoriesElement}
        </div>
    )
}

export default ColumnRecommend