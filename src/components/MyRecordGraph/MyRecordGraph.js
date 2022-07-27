import './MyRecordGraph.css'
import { Line } from 'react-chartjs-2'
import useRecordData from '../../hooks/useRecordData'
import BodyRecordData from '../../BodyRecordData'
import { useState } from 'react'
import SelectDateButton from './SelectDateButton'
import { nanoid } from 'nanoid'

function MyRecordGraph() {
    const { options, data } = useRecordData(BodyRecordData, {
        left: 20,
        right: 20,
        top: 20,
        bottom: 5
    })
    const [recordData, setRecordData] = useState(BodyRecordData)
    const [selectDateButtons, setSelectDateButtons] = useState([
        {
            id: nanoid(),
            text: '日',
            isHeld: false
        },
        {
            id: nanoid(),
            text: '週',
            isHeld: false
        },
        {
            id: nanoid(),
            text: '月',
            isHeld: false
        },
        {
            id: nanoid(),
            text: '年',
            isHeld: true
        },
    ])

    function handleSelectDate(event, buttonId) {
        setSelectDateButtons(prevSelectDateButtonState => {
            return prevSelectDateButtonState.map(button => {
                return button.id === buttonId
                    ? { ...button, isHeld: true }
                    : { ...button, isHeld: false }
            })
        })
    }

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