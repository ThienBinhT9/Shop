import { memo } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from './ProductCart.module.scss'
import numberWithCommans from "../../utils/numberWithCommans";

const cx = classNames.bind(styles)

function Actions({handlIncreaseQuantity,handlMinusQuantity,quantity,deleteProduct,data}) {
    return ( 
        <div className={cx('actions')}>
            <div className={cx('box-price')}>
                <span className={cx('price')}>{numberWithCommans(Number(data.price))} VNĐ</span>
            </div>
            <div className={cx('quantity')}>
                <FontAwesomeIcon 
                    icon={faMinus} 
                    className={cx('btn-quantity')}
                    onClick = {handlMinusQuantity}
                />
                <span>x{quantity}</span>
                <FontAwesomeIcon 
                    icon={faPlus} 
                    className={cx('btn-quantity')}
                    onClick={handlIncreaseQuantity}
                />
            </div>
            <div className={cx('deleteProduct')}>
                <FontAwesomeIcon 
                    icon={faTrashAlt}
                    onClick={deleteProduct}
                />
            </div>
        </div>
    );
}

export default memo(Actions);