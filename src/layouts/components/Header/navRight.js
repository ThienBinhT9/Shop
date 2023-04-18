import classNames from "classnames/bind";
import { useEffect, useState, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChevronRight, faGlobe, faCircleQuestion, faEnvelope, faCircleInfo, faMoon, faSun, faRightFromBracket, faMagnifyingGlass, faShoppingBag, faUser,faHouse,faPhone,faDollar,faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles)
const featureMenu = [
    {
        icon:faGear,
        display:'Cài đặt & Quyền riêng tư',
        children:{
            title:'Cài đặt & Quyền riêng tư',
            data:[
                {
                    icon:faGear,
                    display:'Cài đặt'
                },
                {
                    icon:faGlobe,
                    display:'Ngôn ngữ'
                }
            ]
        },
        multi:faChevronRight
    },
    {
        icon:faCircleQuestion,
        display:'Trợ giúp & Hỗ trợ',
        children:{
            title:'Trợ giúp & Hỗ trợ',
            data:[
                {
                    icon:faCircleQuestion,
                    display:'Trung tâm hỗ trợ'
                },
                {
                    icon:faEnvelope,
                    display:'Hộp thư hỗ trợ'
                },
                {
                    icon:faCircleInfo,
                    display:'Báo cáo sự cố'
                },
            ]
        },
        multi:faChevronRight
    },
    {
        icon:faMoon,
        display:'Màn hình & Tính năng',
        children:{
            title:'Màn hình & Tính năng',
            data:[
                {
                    icon:faSun,
                    display:'Màn hình sáng'
                },
                {
                    icon:faMoon,
                    display:'Màn hình tối'
                }
            ]
        },
        multi:faChevronRight,
    },
    {
        icon:faCircleInfo,
        display:'Đóng góp ý kiến'
    },
    {
        icon:faRightFromBracket,
        display:'Đăng xuất',
        seperate:true
    }
]
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


function NavRight({active,setActive}) {
    const [showMenu,setShowMenu] = useState(false)
    const [showBars,setShowBars] = useState(false)
    const [widthWindow,setWidthWindow] = useState(window.innerWidth)

    useEffect(() => {
        const handlShowMenu = () => {
            setShowMenu(false)
            setShowBars(false)
        }
        window.addEventListener('click',handlShowMenu)

        return () => window.removeEventListener('click',handlShowMenu)
    },[])

    useEffect(() => {

        const handlResize = () => {
            setWidthWindow(window.innerWidth)
        }
        window.addEventListener('resize',handlResize)

        return () => window.removeEventListener('resize',handlResize)
    },[])

    return ( 
        <div className={cx('navRight')}>

            {/*Nav Bars */}
            {widthWindow <= 600 &&
                <div 
                    className={cx('btn-menu-bars')} 
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className={cx({active:active === 'bars'})}
                        onClick={(e) => {
                            setShowBars(true)
                            setShowMenu(false)
                            e.stopPropagation()
                            setActive('bars')
                        }}
                    />
                    {showBars && <Menu items={nav} onClose={() => {setShowBars(false)}}/>}
                </div>
            }

            {/**Search */}
            <Link className={cx('navRight__item','box__search')} to='/catalog'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx({active:active === 'icon__search'})} onClick={() => {setActive('icon__search')}}/>
            </Link>

            {/*Trang chủ */}
            {widthWindow <= 600 &&
                <Link to='/' className={cx('navRight__item',{active: active === 0})}>
                    <FontAwesomeIcon icon={faHouse} onClick={() => setActive(0)}/>
                </Link>
            }

            {/*Cart */}
            <Link to='/cart' className={cx('navRight__item')} onClick={() => {setActive('cart')}}>
                <FontAwesomeIcon icon={faShoppingBag} className={cx({active:active === 'cart'})}/>
                <div className={cx('quantity-cart')}>{99}</div>
            </Link>

            {/**Account */}
            <div className={cx('navRight__item','account',{active: active === 'account'})}
                onClick={(e) => {
                    e.stopPropagation()
                    setActive('account')
                }}
            >
                <FontAwesomeIcon 
                    icon={faUser} 
                    onClick={() => {
                        setShowMenu(prev => prev === false ? true : false)
                        setShowBars(false)
                    }}
                />
                {showMenu &&  <Menu toprofile items={featureMenu} onClose={() => {setShowMenu(false)}}/>}
            </div>
        </div>
    );
}

export default memo(NavRight);