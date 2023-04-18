import classNames from "classnames/bind";
import { memo } from 'react'

import styles from './ProductView.module.scss'

const cx = classNames.bind(styles)

function Size({setSize,sizeActive,setSizeActive,_product}) {
    return ( 
        <div className={cx('info__item')}>
            <h3 className={cx('info__item__title')}>Kích cỡ</h3>
            <div className={cx('info__item__list')}>
                {
                    _product.size.map((item,index) => {
                        return (
                            <div
                                key={index}
                                className={cx('info__item__list__item',{active:sizeActive === index})}
                                onClick={() => {
                                    setSizeActive(index)
                                    setSize(item)
                                }}
                            >
                                <span className={cx('info__item__list__item__size')}>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default memo(Size);