import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'

import NavLeft from './navLeft';
import NavRight from './navRight';
import logo from '../../../assets/images/Logo-2.png'
import styles from './Header.module.scss'
import NavBarLess1024px from './navBarless1024px';

const cx = classNames.bind(styles)



function Header () {

    const [resize,setResize] = useState(window.innerWidth)
    const [shrink,setShrink] = useState(false)
    const [active,setActive] = useState(0)

    useEffect(() => {
        const handlResizeWindow = () => {
            setResize(window.innerWidth)
        }
        window.addEventListener('resize',handlResizeWindow)

        return () => window.removeEventListener('resize',handlResizeWindow)
    },[])

    useEffect(() => {
        const handlShrink = () => {
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                setShrink(true)
            }
            else{
                setShrink(false)
            }
        }
        window.addEventListener('scroll',handlShrink)

        return () => window.removeEventListener('scroll',handlShrink)
    },[])

    return ( 
        <div className={cx('wrapper',{shrink:shrink})}>
            <div className={cx('inner')}>
                
                {/**Nav Bars less 1024px */}
                {resize <= 1024 && resize > 600 &&
                    <NavBarLess1024px />
                }

                {/*Nav Left more 1024px*/}
                {resize > 1024 && <NavLeft active={active} setActive={setActive}/>}

                {/*Logo */}
                {resize >= 600 &&
                    <Link 
                        to='/' 
                        className={cx('logo')}
                        onClick={() => setActive(0)}
                    >
                        <img src={logo} alt='logo'/>
                    </Link>
                }
                
                {/*Nav Right */}
                <NavRight active={active} setActive={setActive}/>
            </div>
        </div>
    );
}

export default Header;