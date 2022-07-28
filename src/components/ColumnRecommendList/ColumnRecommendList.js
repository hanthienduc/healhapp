import { nanoid } from 'nanoid'
import { ColumnRecommendContext } from '../../context/ColumnRecommendContext'
import { useContext } from 'react'
import ColumnRecommendListItem from './ColumnRecommendListItem'

function ColumnRecommendList() {
    const context = useContext(ColumnRecommendContext)

    const currentSelectCategoryListElements = context.currentSelectCategory?.recommendList?.map(item => {
        return <ColumnRecommendListItem
            key={nanoid()}
            id={item.id}
            img={item.img}
            date={item.date}
            time={item.time}
            description={item.description}
            tags={item.tags} />
    })

    return (
        <div className='column-recommend-list'>
            {context.isLoading ? <h3 className='loading'>loading....</h3> : currentSelectCategoryListElements}
        </div>
    )
}

export default ColumnRecommendList