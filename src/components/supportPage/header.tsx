
import { url } from 'inspector'
import support_header from '../../assets/images/support_header.png'
import SearchArticles from './searchArticles'

export default function SupportHeader() {

    return (
        <header>
            <div
            className='support-header-container'
            style={{
                backgroundImage: `linear-gradient(180deg,rgba(2,0,0,0),#a62626 50%),
                url(${support_header.src})`,
            }}>
                <span className='support-header-wellcome'>
                    به مرکز پشتیبانی دیوار خوش آمدید
                </span>
                <span className='support-header-help'>
                    چطور می‌توانیم کمکتان کنیم؟
                </span>
                <SearchArticles/>
            </div>
        </header>
    )
}