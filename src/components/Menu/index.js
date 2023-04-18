import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from './Menu.module.scss'
import Button from "../Button";
import { useEffect, useState } from "react";
import avatar from '../../assets/images/bg.jpg'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)


function Menu({items,onClose,toprofile}) {
    const [menuList,setMenuList] = useState([{data:items}])
    const [widthWindow,setWidthWindow] = useState(window.innerWidth)

    const curentMenu = menuList[menuList.length - 1]

    const renderItemMenu = () => {
        return curentMenu.data.map((item,index) => {
            return (
                <Button 
                    key={index}
                    to={item.path}
                    iconLeft={item.icon}
                    className={cx('menu__item',{seperate:item.seperate})}
                    onClick={() => {
                        if(item.children){
                            setMenuList(prev => [...prev,item.children])
                        }
                    }}
                >
                    {item.display}
                    <FontAwesomeIcon className={cx('menu__item__multi')} icon={item.multi} />
                </Button>
            )
        })
    }

    const onBack = () => {
        setMenuList(prev => prev.slice(0,prev.length - 1))
    }

    useEffect(() => {
        const handlResize = () => {
            setWidthWindow(window.innerWidth)
        }
        window.addEventListener('resize',handlResize)

        return () => window.removeEventListener('resize',handlResize)
    },[])

    return ( 
        <div className={cx('menu')}>
            <div className={cx('content')}>
                {widthWindow <= 1024 && widthWindow > 600 &&
                    <div className={cx('closeMenu')}>
                        <FontAwesomeIcon 
                            icon={faXmark}
                            onClick={onClose}
                        />
                    </div>
                }
                {menuList.length > 1 && <Header onBack={onBack} title={curentMenu.title}/>}
                {toprofile && menuList.length <= 1 &&
                    <Link to='/profile' className={cx('profile')}>
                        <img src={avatar} alt='avatar'/>
                        <span>Đỗ Hoài Phong</span>
                    </Link>
                }
                <div className={cx('menu__body')}>
                    {renderItemMenu()}
                </div>
            </div>
        </div>
    );
}

const Header = ({onBack,title}) => {
    return (
        <div className={cx('menu__header')}>
            <FontAwesomeIcon 
                className={cx('back')} 
                icon={faChevronLeft} 
                onClick={onBack}
            />
            <span className={cx('menu__header__title')}>{title}</span>
        </div>
    )
}

export default Menu;