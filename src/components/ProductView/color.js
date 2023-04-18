import classNames from "classnames/bind";
import { memo } from "react";

import styles from './ProductView.module.scss'

const cx = classNames.bind(styles)

function Color({setColor,setColorActive,colorActive,_product}) {
    return ( 
        <div className={cx('info__item')}>
            <h3 className={cx('info__item__title')}>Màu sắc</h3>
            <div className={cx('info__item__list')}>
                {
                    _product.colors.map((item,index) => {
                        return (
                            <div 
                                key={index}
                                className={cx('info__item__list__item',{active:colorActive === index})}
                                onClick={() => {
                                    setColorActive(index)
                                    setColor(item)
                                }}
                            >
                                <div className={cx('circle',`bg-${item}`)}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default memo(Color);