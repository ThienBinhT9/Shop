import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Catalog.module.scss'
import Button from "../../components/Button";
import { useRef, useState } from "react";

const cx = classNames.bind(styles)

function Search() {

    const inputRef = useRef()

    const [value,setValue] = useState('')

    const handlClear = () => {
        setValue('')
        inputRef.current.focus()
    }
    return ( 
        <div className={cx('search__content')}>
            <input 
                ref={inputRef}
                value={value}
                placeholder="Tìm kiếm..."
                onChange={(e) => {setValue(e.target.value)}}
            />
            {
            value && <FontAwesomeIcon 
                className={cx('clear')} 
                icon={faXmark}
                onClick={handlClear}
                />
            }
            <Button 
                primary 
                small
                className={cx('btn-search')}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </div>
    );
}

export default Search;