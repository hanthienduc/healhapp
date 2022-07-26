import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer-list'>
                <li><Link className='footer-link' to={'/'}>会員登録</Link></li>
                <li><Link className='footer-link' to={'/'}>運営会社</Link></li>
                <li><Link className='footer-link' to={'/'}>利用規約</Link></li>
                <li><Link className='footer-link' to={'/'}>個人情報の取扱について</Link></li>
                <li><Link className='footer-link' to={'/'}>特定商取引法に基づく表記</Link></li>
                <li><Link className='footer-link' to={'/'}>お問い合わせ</Link></li>
            </ul>
        </footer>
    )
}

export default Footer