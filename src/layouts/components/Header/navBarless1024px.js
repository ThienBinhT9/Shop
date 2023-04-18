import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faShoppingBag,faPhone,faDollar,faBars} from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import { useEffect, useState } from "react";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles)
const nav = [
    {
        path:'/',
        display:'Trang chủ',
        icon:faHouse
    },
    {
        path:'/catalog',
        display:'Sản phẩm',
        icon:faShoppingBag
    },
    {
        path:'/product',
        display:'Giảm giá',
        icon:faDollar
    },
    {
        path:'/contact',
        display:'Liên hệ',
        icon:faPhone
    }
]

function NavBarLess1024px() {

    const [showBars,setShowBars] = useState(false)

    useEffect(() => {
        const handlClick = () => {
            setShowBars(false)
        }
        window.addEventListener('click',handlClick)

        return () => window.removeEventListener('click',handlClick)
    },[])

    return ( 
        <div className={cx('btn-menu-bars')} onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon 
                icon={faBars} 
                onClick={() => {
                    setShowBars(true)
                }}
            />
            {showBars && <Menu items={nav} onClose={() => {setShowBars(false)}}/>}
        </div>
    );
}

export default NavBarLess1024px;