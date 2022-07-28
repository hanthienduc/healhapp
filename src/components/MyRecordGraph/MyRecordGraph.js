import './MyRecordGraph.css'
import { Line } from 'react-chartjs-2'
import useRecordData from '../../hooks/useRecordData'
import BodyRecordData from '../../BodyRecordData'
import SelectDateButton from './SelectDateButton'
import useMyRecordData from '../../hooks/useMyRecordData'

function MyRecordGraph() {
    const { options, data } = useRecordData(BodyRecordData, {
        left: 20,
        right: 20,
        top: 20,
        bottom: 5
    })

    const { recordData, selectDateButtons, handleSelectDate } = useMyRecordData(BodyRecordData)

    return (
        <div className='my-record-graph'>
            <p className='record-title'>BODY<br /> RECORD
                <span className='record-date'>
                    {recordData.labels[recordData.labels.length - 1]}
                </span>
            </p>
            <div className='graph-container'>
                <Line options={options} data={data} />
            </div>
            <div className='date-select'>
                {selectDateButtons.map(button => (
                    <SelectDateButton key={button.id} id={button.id} handleClick={handleSelectDate}
                        text={button.text} isHeld={button.isHeld} />
                ))}
            </div>
        </div>
    )
}

export default MyRecordGraph