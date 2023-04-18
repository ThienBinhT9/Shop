import classNames from "classnames/bind";
import { memo } from 'react'

import styles from './ProductView.module.scss'
import Button from "../Button";

const cx = classNames.bind(styles)

function Images({_product,setDescExpand,descExpand,setImagePreview,imagePreview}) {
    return ( 
        <div className={cx('images')}>
            <div className={cx('image__list')}>
                <div className={cx('image__item')} onClick={() => {setImagePreview(_product.image01)}}>
                    <img src={_product.image01} alt="image01"/>
                </div>
                <div className={cx('image__item')} onClick={() => {setImagePreview(_product.image02)}}>
                    <img src={_product.image02} alt="image02"/>
                </div>
            </div>
            <div className={cx('image__main')}>
                <img src={imagePreview} alt="imagePreview"/>
            </div>
            <div className={cx('description',{expand:descExpand})}>
                <h3 className={cx('description__title')}>Chi tiết sản phẩm</h3>
                <div className={cx('description__content')} dangerouslySetInnerHTML={{__html:_product.description}}></div>
                <div className={cx('description__toggle')}>
                    <Button primary onClick={() => {setDescExpand(prev => prev === false ? true : false)}}>
                        {descExpand ? 'Thu gọn' : 'Xem thêm'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default memo(Images);