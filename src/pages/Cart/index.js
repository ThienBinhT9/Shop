import { useState, useEffect } from 'react';
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss'
import Helmet from "../../components/Helmet";
import Row from '../../components/Row'
import Col from '../../components/Col'
import Button from '../../components/Button'
import numberWithCommans from '../../utils/numberWithCommans'
import ProductCart from '../../components/ProductCart';

const cx = classNames.bind(styles)

function Cart() {
    
  
    const listProduct = useSelector(products => products.cart)
    const [totle,setTotle] = useState(() => {
        const totleMonney = listProduct.reduce((totle,currentMonney) => {
            return totle + Number(currentMonney.price * currentMonney.quantity)
        },0)
    
        return totleMonney
    })

    useEffect(() => {
        const totleMonney = JSON.parse(localStorage.getItem('listCart')).reduce((totle,currentItem) => {
            return totle + Number(currentItem.price * currentItem.quantity)
        },0)
        setTotle(totleMonney)
    },[listProduct])

    return ( 
        <Helmet title='Giỏ hàng'>
            <div className={cx('wrapper')}>
                <Row>
                    <Col l={4} m={7} s={12}>
                        <div className={cx('pay')}>
                            <p className={cx('quantity')}>Bạn đang có <span>{listProduct.length}</span> sản phẩm trong giỏ hàng</p>
                            <div className={cx('totleMonney')}>
                                <span>Thành tiền:</span>
                                <span className={cx('monney')}>{numberWithCommans(totle)} VNĐ</span>
                            </div>
                            <Button
                                primary
                                className={cx('btn-pay')}
                            >
                                ĐẶT HÀNG
                            </Button>
                            <Button
                                primary
                                className={cx('btn-pay')}
                                to='/catalog'
                            >
                                TIẾP TỤC MUA HÀNG
                            </Button>
                        </div>
                    </Col>
                    <Col l={8} m={12} s={12}>
                        <div className={cx('products')}>
                            {listProduct.length <= 0 ?
                            <div className={cx('empty__product')}>
                                <h3>Không có Sản Phẩm!</h3>
                            </div> :
                            listProduct.map((item,index) => {
                                return <ProductCart data={item} key={index}/>
                            })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </Helmet>
    );
}

export default Cart;