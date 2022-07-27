import SeeMoreButton from '../components/SeeMoreButton/SeeMoreButton'
import './Column.css'
import ColumnRecommendData from '../ColumnRecommendData'

import ColumnRecommendItem from '../components/ColumnRecommend/ColumnRecommendItem'
import ColumnRecommendListItem from '../components/ColumnRecommendList/ColumnRecommendListItem'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

function Column() {

    const [recommendData, setRecommendData] = useState([ColumnRecommendData])
    const [recommendCategories, setRecommendCategories] = useState([])
    const [currentSelectCategory, setCurrentSelectCategory] = useState({})
    const [currentSelectId, setCurrentSelectedId] = useState('1')

    useEffect(() => {
        setRecommendData(ColumnRecommendData)
        setRecommendCategories(recommendData.map(categoryData => {
            return {
                id: categoryData.id,
                title: categoryData.title,
                subtitle: categoryData.subtitle,
            }
        }))
        setCurrentSelectedId('1')
        setCurrentSelectCategory(recommendData.find((categoryData) => categoryData.id === currentSelectId))

    }, [recommendData, currentSelectId])

    const recommendCategoriesElement = recommendCategories.map(category => (
        <ColumnRecommendItem
            key={nanoid()}
            id={category.id}
            title={category.title}
            subtitle={category.subtitle} />
    ))

    const currentSelectCategoryListElements = currentSelectCategory?.recommendList?.map(item => {
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
        <main className='column'>
            <div className="column-recommend">
                {recommendCategoriesElement}
            </div>
            <div className='column-recommend-list'>
                {/* {currentSelectCategoryListElements} */}
                {currentSelectCategoryListElements}
            </div>
            <SeeMoreButton title={'コラム'} />
        </main>
    )
}

export default Column