import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './ProductCard.module.scss'
import Button from '../Button'
import numberWithCommans from '../../utils/numberWithCommans'

const cx = classNames.bind(styles)


function ProductCard({data,className}) {
    
    return ( 
        <div className={cx('wrapper',{[className]:className})}>
            <Link to={`/catalog/product/${data.slug}`}>
                <div className={cx('images')}>
                    <img src={data.image01} alt='img1'/>
                    <img src={data.image02} alt='img2'/>
                </div>
                <p className={cx('name')}>{data.title}</p>
                <div className={cx('price')}>
                    <span className={cx('priceCurent')}>{numberWithCommans(data.price)}</span>
                    <span className={cx('priceOld')}><del>{numberWithCommans(3999000)}</del></span>
                </div>
            </Link>
            <Button 
                primary
                className={cx('btn')}
            >
                Mua Ngay
            </Button>
            
        </div>
    );
}

export default ProductCard;