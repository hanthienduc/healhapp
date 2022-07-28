import SeeMoreButton from '../components/SeeMoreButton/SeeMoreButton'
import './Column.css'
import { ColumnContextProvider } from '../context/ColumnRecommendContext'
import ColumnRecommendList from '../components/ColumnRecommendList/ColumnRecommendList'
import ColumnRecommend from '../components/ColumnRecommend/ColumnRecommend'

function Column() {
    return (
        <ColumnContextProvider>
            <main className='column'>
                <ColumnRecommend />
                <ColumnRecommendList />
                <SeeMoreButton title={'コラム'} />
            </main>
        </ColumnContextProvider>

    )
}

export default Column