import classNames from "classnames/bind";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";

import Size from "./size";
import Color from "./color";
import Images from "./images";
import Button from "../Button";
import Quantity from "./quantity";
import styles from './ProductView.module.scss'
import { ADD_PRODUCT } from '../../redux/actions/cart'
import numberWithCommans from "../../utils/numberWithCommans";

const cx = classNames.bind(styles)

function ProductView({product}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
const products = useSelector(state => state.cart)

    let _product = product   
    
    const [imagePreview,setImagePreview] = useState(_product.image01)
    const [colorActive,setColorActive] = useState(undefined)
    const [color,setColor] = useState(undefined)
    const [size,setSize] = useState(undefined)
    const [sizeActive,setSizeActive] = useState(undefined)
    const [quantity,setQuantity] = useState(1)
    const [descExpand,setDescExpand] = useState(false)

    

    if(_product === undefined){
        _product = {
            categorySlug:'',
            colors:[],
            image01:'',
            image02:'',
            price:'',
            size:[],
            slug:'',
            title:''
        }    
    }
 
    useEffect(() => {
        setImagePreview(_product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    },[_product])

    const check = () => {
        if(color === undefined){
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if(size === undefined){
            alert('Vui lòng chọn kích cỡ')
            return false
        }

        return true
    }

    const addToCart = () => {
        if(check()){
            let newItem = {
                slug:_product.slug,
                color:color,
                size:size,
                price:_product.price,
                image:_product.image01,
                quantity:quantity,
                title:_product.title
            }

            if(!!dispatch(ADD_PRODUCT(newItem))){
                alert('Thêm vào giỏ hàng thành công!')
            }else{
                alert('Thêm sản phẩm thất bại =((')
            }
        }
    }
    console.log(products);

    const goToCart = () => {
        navigate('/cart')
    }

    return ( 
        <div className={cx('wrapper')}>

            {/**Image product */}
            <Images _product={_product} setDescExpand={setDescExpand} descExpand={descExpand} setImagePreview={setImagePreview} imagePreview={imagePreview}/>
            {/**End Image product */}

            <div className={cx('info')}>
                <h3 className={cx('info__title')}>{_product.title}</h3>

                {/**Price product */}
                <div className={cx('info__item')}>
                    <span className={cx('info__item__price')}>{numberWithCommans(_product.price)}</span>
                </div>
                {/**End Price product */}

                {/**Color product */}
                <Color setColor={setColor} setColorActive={setColorActive} colorActive={colorActive} _product={_product}/>
                {/**End Color product */}

                {/**Size product */}
                <Size setSize={setSize} sizeActive={sizeActive} setSizeActive={setSizeActive} _product={_product} />
                {/**End Size product */}

                {/**Quantity product */}
                <Quantity quantity={quantity} setQuantity={setQuantity}/>
                {/**End Quantity product */}

                <div className={cx('info__item','box_buyNow')}>
                    <Button
                        primary
                        iconLeft={faPlus}
                        className={cx('btn-add-toCart')}
                        onClick={addToCart}
                    > 
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                    <Button
                        primary
                        className={cx('btn-add-toCart')}
                        onClick={goToCart}
                    >
                        Mua ngay
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductView;