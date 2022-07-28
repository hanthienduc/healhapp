import { useState } from "react"
import { nanoid } from 'nanoid'

function useMyRecordData(BodyRecordData) {
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

    return {
        recordData,
        selectDateButtons,
        handleSelectDate
    }

}

export default useMyRecordData