import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons'

import styles from './Help.module.scss'
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles)


function Help() {

    const gears = useRef()

    useEffect(() => {

        window.scrollTo(0,0)

        gears.current.animate([
            {transform: 'rotate(360deg)'}
        ],
        {
            duration: 10000,
            iterations:Infinity
        })
    },[])

    return ( 
        <div className={cx('wrapper')}>
            <div ref={gears} className={cx('gears')}><FontAwesomeIcon icon={faGear} /></div>
            <h3><a href="https://www.facebook.com/profile.php?id=100070801670866">Đỗ Hoài Phong</a> chưa cập nhật tính năng này :v</h3>
        </div>
    );
}

export default Help;