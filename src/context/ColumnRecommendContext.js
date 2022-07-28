import { createContext, useEffect, useState } from "react"
import ColumnRecommendData from '../ColumnRecommendData'

const ColumnRecommendContext = createContext()

function ColumnContextProvider(props) {

    const [recommendData, setRecommendData] = useState([ColumnRecommendData])
    const [recommendCategories, setRecommendCategories] = useState([])
    const [currentSelectCategory, setCurrentSelectCategory] = useState({})
    const [currentSelectId, setCurrentSelectedId] = useState('1')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setRecommendData(ColumnRecommendData)
        setRecommendCategories(recommendData.map(categoryData => {
            return {
                id: categoryData.id,
                title: categoryData.title,
                subtitle: categoryData.subtitle,
            }
        }))
        const fakeTimeout = setTimeout(() => {
            setIsLoading(false)
        }, 300)

        return function () {
            clearTimeout(fakeTimeout)
        }
    }, [recommendData])

    useEffect(() => {
        setIsLoading(true)
        setCurrentSelectCategory(recommendData.find((categoryData) => categoryData.id === currentSelectId))
        const fakeTimeout = setTimeout(() => {
            setIsLoading(false)
        }, 300)

        return function () {
            clearTimeout(fakeTimeout)
        }
    }, [recommendData, currentSelectId])


    function handleSelectCategory(e, categoryId) {
        setCurrentSelectedId(categoryId)
        setCurrentSelectCategory(recommendData.find((categoryData) => categoryData.id === currentSelectId))
    }

    return (
        <ColumnRecommendContext.Provider value={{
            isLoading,
            currentSelectCategory,
            recommendCategories,
            handleSelectCategory
        }}>
            {props.children}
        </ColumnRecommendContext.Provider>
    )
}

export { ColumnContextProvider, ColumnRecommendContext }