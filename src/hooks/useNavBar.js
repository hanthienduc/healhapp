import { useState } from "react"

function useNavBar() {
    const [isShownDropDown, setIsShownDropDown] = useState(false)
    const [noticeCount, setNoticeCount] = useState(1)
    const [dropdownStyle, setDropDownStyle] = useState({
        'display': 'none',
        'height': '0px'
    })

    function toggleDropDown(e) {
        setIsShownDropDown((prevState) => !prevState)
        setDropDownStyle((prevStyle) => {
            return {
                'display': prevStyle.display === 'none' ? 'block' : 'none',
                'height': prevStyle.height === '0px' ? 'auto' : '0px'
            }
        })
    }

    return {
        isShownDropDown,
        noticeCount,
        dropdownStyle,
        toggleDropDown
    }
}

export default useNavBar