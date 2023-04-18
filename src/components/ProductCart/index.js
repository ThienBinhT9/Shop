import { useState } from "react";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import Info from "./info";
import Actions from "./actions";
import styles from './ProductCart.module.scss'
import productData from '../../assets/fakeData/product'
import { DELETE_PRODUCT, UPDATE_PRODUCT } from '../../redux/actions/cart'
import ModalChangePropProduct,{ ModalContent } from "../ProductModalProps";

const cx = classNames.bind(styles)

function ProductCart({data}) {
    const dispacth = useDispatch()
    const colors = productData.getAllProducts().find(e => e.slug === data.slug).colors
    const size = productData.getAllProducts().find(e => e.slug === data.slug).size
    const product = JSON.parse(localStorage.getItem('listCart')).find(e => e.slug === data.slug)

    const [quantity,setQuantity] = useState(data.quantity)
    const [showModalColor,setShowModalColor] = useState(false)
    const [showModalSize,setShowModalSize] = useState(false)
    const [updateColor,setUpdateColor] = useState(product.color)
    const [updateSize,setUpdateSize] = useState(product.size)



    if(data === undefined){
        data = {
            image:'',
            title:'',
            price:'',
            color:'',
            size:'',
            slug:'',
        }
    }

    const deleteProduct = () => {
        alert('Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng')
        dispacth(DELETE_PRODUCT(data.id))
    }

    const handlIncreaseQuantity = () => {
        setQuantity(prev => prev + 1)
        data.quantity++
        dispacth(UPDATE_PRODUCT(data))
    }

    const handlMinusQuantity = () => {
        setQuantity(prev => prev === 1 ? 1 : prev - 1)
        if(data.quantity <=1) data.quantity = 1
        else data.quantity--
        dispacth(UPDATE_PRODUCT(data))
    }

    const closeModal = () => {
        setShowModalColor(false)
        setShowModalSize(false)
    }

    return ( 
        <div className={cx('wrapper')}>
            {/**Info Product */}
            <Info setShowModalColor={setShowModalColor} setShowModalSize={setShowModalSize} updateColor={updateColor} updateSize={updateSize} data={data}/>
            {/**End Info Product */}
            
            {/*Actions */}
            <Actions handlIncreaseQuantity={handlIncreaseQuantity} handlMinusQuantity={handlMinusQuantity} quantity={quantity} deleteProduct={deleteProduct} data={data}/>
            {/*End Actions */}
            
            {/**Modal Change Color,Size */}
            {showModalColor &&
            <ModalChangePropProduct>
                <ModalContent onClose={closeModal} data={colors} title={'Màu sắc'} item={data} setUpdateColor={setUpdateColor}/>
            </ModalChangePropProduct>
            }
            
            {showModalSize &&
            <ModalChangePropProduct>
                <ModalContent onClose={closeModal} data={size} title={'Kích cỡ'} item={data} setUpdateSize={setUpdateSize}/>
            </ModalChangePropProduct>
            }
            {/**End Modal Change Color,Size */}
        </div>
    );
}

export default ProductCart;