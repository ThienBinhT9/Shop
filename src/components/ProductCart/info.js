import classNames from "classnames/bind";
import { memo } from "react";

import styles from './ProductCart.module.scss'

const cx = classNames.bind(styles)


function Info({setShowModalColor,setShowModalSize,updateSize,updateColor,data}) {

    return ( 
        <div className={cx('info')}>
            <img src={data.image} alt="image01"/>
            <span className={cx('title')}>
                <span className={cx('info__name')}>{data.title}</span>
                <span 
                    className={cx('info__color')}
                    onClick={() => {setShowModalColor(true)}}
                >
                    Màu sắc: <span>{updateColor}</span>
                </span>
                <span 
                    className={cx('info__size')}
                    onClick={() => {setShowModalSize(true)}}
                >
                    Kích cỡ: <span>{updateSize}</span>
                </span>
            </span>
        </div>
    );
}

export default memo(Info);