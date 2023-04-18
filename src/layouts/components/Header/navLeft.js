import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import { memo } from 'react'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)
const nav = [
    {
        path:'/',
        display:'Trang chủ'
    },
    {
        path:'/catalog',
        display:'Sản phẩm'
    },
    {
        path:'/sale',
        display:'Giảm giá'
    },
    {
        path:'/contact',
        display:'Liên hệ'
    }
]


function NavLeft({active,setActive}) {


    return ( 
        <div className={cx('navLeft')}>
            {
                nav.map((item,index) => {
                    return (
                        <Link 
                            key={index} 
                            to={item.path}
                            className={cx('navLeft__item',{active:active === index})}
                            onClick={() => {setActive(index)}}
                        >
                            {item.display}
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default memo(NavLeft);