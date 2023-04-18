import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useState, memo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from './ProductModalProps.module.scss'
import Button from "../Button";
import { UPDATE_PRODUCT } from '../../redux/actions/cart'

const cx = classNames.bind(styles)

function ModalChangePropProduct({children}) {
    return ( 
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export const ModalContent = ({onClose,data,title,item,setUpdateColor,setUpdateSize}) => {
    const dispacth = useDispatch()

    const [active,setActive] = useState(() => {
        const index = data.findIndex((e) => {
            let type
            if(title === 'Màu sắc'){
                type = e === item.color
            }
            else if(title === 'Kích cỡ'){
                type = e === item.size
            }
            return type
        })
        return index
    })

    const [getData,setGetData] = useState(active)

    const handlSubmit = () => {
        let newItem
        if(title === 'Màu sắc'){
            newItem = {
                ...item,
                color:data[getData]
            }
        }
        else if(title === 'Kích cỡ'){
            newItem = {
                ...item,
                size:data[getData]
            }
        }
        if(setUpdateColor){
            setUpdateColor(data[getData])
        }
        if(setUpdateSize){
            setUpdateSize(data[getData])
        }
        dispacth(UPDATE_PRODUCT(newItem))
        onClose()
    }

    return (
        <div className={cx('content')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Tùy chọn {title}</h3>
                <FontAwesomeIcon icon={faXmark} 
                    className={cx('closeModal')}
                    onClick={onClose}
                />
            </div>
            <div className={cx('body')}>
                {
                    data.map((item,index) => {
                        return(
                            <div 
                                key={index} 
                                className={cx('item',{active: index === active})} 
                                onClick={() => {
                                    setActive(index)
                                    setGetData(index)
                                }}
                            >
                                <span className={cx({classSize:title === 'Kích cỡ'})}>{item}{title === 'Màu sắc' ? ':' : ''}</span>
                                {title === 'Màu sắc' && <div className={cx(`bg-${item}`,{box__color:title === 'Màu sắc'})}></div>}
                                <FontAwesomeIcon className={cx('check')} icon={faCheck} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={cx('actions')}>
                <Button className={cx('btn')} onClick={onClose}>Hủy bỏ</Button>
                <Button className={cx('btn')} primary onClick={handlSubmit}>Chọn</Button>
            </div>
        </div>
    )
}

export default memo(ModalChangePropProduct);