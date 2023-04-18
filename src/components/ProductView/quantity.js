import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { memo } from 'react'

import styles from './ProductView.module.scss'

const cx = classNames.bind(styles)


function Quantity({quantity,setQuantity}) {
    return ( 
        <div className={cx('info__item')}>
            <h3 className={cx('info__item__title')}>Số lượng</h3>
            <div className={cx('info__item__quantity')}>
                <div className={cx('info__item__quantity__btn')}>
                    <FontAwesomeIcon 
                        icon={faMinus} 
                        onClick={() => {setQuantity(prev => {if(prev <= 1){return 1} return prev - 1})}}
                    />
                </div>
                <div className={cx('info__item__quantity__input')}>{quantity}</div>
                <div className={cx('info__item__quantity__btn')}>
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        onClick = {() => {setQuantity(prev => prev + 1)}}
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(Quantity);