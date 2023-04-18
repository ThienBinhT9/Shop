import classNames from "classnames/bind";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import styles from './Checkbox.module.scss'

const cx = classNames.bind(styles)

function Checkbox(props) {

    const inputRef = useRef()

    const handlChange = (e) => {
        if(props.onChange){
            props.onChange(inputRef.current)
        }
    }

    return ( 
        <label className={cx('wrapper')}>
            <input 
                type='checkbox' 
                ref={inputRef}
                checked={props.checked}
                onChange={handlChange}
            />
            <span className={cx('checkmark')}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>{props.label}</span>
        </label>
    );
}

export default Checkbox;