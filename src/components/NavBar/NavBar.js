import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import icon_info from '../../assets/menu-icon/icon_info.png'
import icon_memo from '../../assets/menu-icon/icon_memo.png'
import icon_menu from '../../assets/menu-icon/icon_menu.png'
import icon_close from '../../assets/menu-icon/icon_close.png'
import icon_challenge from '../../assets/menu-icon/icon_challenge.png'
import "./NavBar.css"
import useNavBar from '../../hooks/useNavBar'
import CustomListItem from '../../utils/CustomListItem'

function NavBar() {

    const { isShownDropDown, noticeCount, dropdownStyle, toggleDropDown } = useNavBar()

    return (
        <header className='header'>
            <div className="logo">
                <Link to={'/'}><img src={logo} alt="health" /></Link>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <CustomListItem to={'myrecord'} src={icon_memo} text={'自分の記録'} />
                    <CustomListItem to={'challenge'} src={icon_challenge} text={'チャレンジ'} />
                    <div className='notice'>
                        <CustomListItem to={'notice'} src={icon_info} text={'お知らせ'} />
                        <span className='notice-count'>{noticeCount}</span>
                    </div>
                    <div className='dropdown-menu'>
                        <img id='dropdown-icon' onClick={toggleDropDown}
                            className='dropdown-menu-icon'
                            src={isShownDropDown ? icon_close : icon_menu}
                            alt={'menu'} />
                        <ul className='dropdown-list' style={dropdownStyle}  >
                            <li><Link to={'myrecord'}>自分の記録</Link></li>
                            <li><Link to={'myrecord'}>体重グラフ</Link></li>
                            <li><Link to={'myrecord'}>目標</Link></li>
                            <li><Link to={'myrecord'}>選択中のコース</Link></li>
                            <li><Link to={'/column'}>コラム一覧</Link></li>
                            <li><Link to={''}>設定</Link></li>
                        </ul>
                    </div>
                </ul>

            </nav>
        </header>
    )
}

export default NavBar