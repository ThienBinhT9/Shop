import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


import styles from './Catalog.module.scss'
import category from "../../assets/fakeData/category";
import colors from "../../assets/fakeData/product-color";
import sizes from "../../assets/fakeData/product-size";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const cx = classNames.bind(styles)

function Category({filter,selectFilter,ClearFilter}) {

    const [resize,setResize] = useState(window.innerWidth)
    const [showFilter,setShowFilter] = useState(false)

    useEffect(() => {
        const handlResize = () => {
            setResize(window.innerWidth)
        }
        window.addEventListener('resize',handlResize)

        return () => window.removeEventListener('resize',handlResize)
    },[])

    useEffect(() => {
        const handlClick = () => {
            setShowFilter(false)
        }
        window.addEventListener('click',handlClick)

        return () => window.removeEventListener('click',handlClick)
    },[])

    const handlShowFilter = () => {
        setShowFilter(true)
    }

    return ( 
        <div className={cx('filter')} onClick={(e) => e.stopPropagation()}>
            <div className={cx('filter__content',{showFilter:resize <= 1024 && showFilter})}>
                {resize <= 1024 &&
                <div className={cx('outFilter')}  onClick={() => setShowFilter(false)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                }
                <div className={cx('widget')}>
                    <h3 className={cx('widget__title')}>DANH MỤC SẢN PHẨM</h3>
                    <div className={cx('widget__content')}>
                        {
                            category.map((item,index) => {
                                return (
                                    <div className={cx('widget__item')} key={index}>
                                        <Checkbox
                                            label={item.display}
                                            onChange = {(input) => {selectFilter('CATEGORY',input.checked,item)}}
                                            checked = {filter._category.includes(item.categorySlug)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx('widget')}>
                    <h3 className={cx('widget__title')}>MÀU SẮC</h3>
                    <div className={cx('widget__content')}>
                        {
                            colors.map((item,index) => {
                                return (
                                    <div className={cx('widget__item')} key={index}>
                                        <Checkbox
                                            label={item.display}
                                            onChange={(input) => {selectFilter('COLORS',input.checked,item)}}
                                            checked = {filter._colors.includes(item.color)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx('widget')}>
                    <h3 className={cx('widget__title')}>KÍCH CỠ</h3>
                    <div className={cx('widget__content')}>
                        {
                            sizes.map((item,index) => {
                                return (
                                    <div className={cx('widget__item')} key={index}>
                                        <Checkbox 
                                            label={item.display}
                                            onChange = {(input) => {selectFilter('SIZES',input.checked,item)}}
                                            checked={filter._sizes.includes(item.size)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx('widget')}>
                    <Button
                        primary
                        onClick={ClearFilter}
                    >
                        Xóa bộ lọc
                    </Button>
                </div>
            </div>
            {resize <= 1024 &&
                (
                    <div className={cx('widget')}>
                        <Button
                            primary
                            onClick={handlShowFilter}
                        >
                            Bộ lọc
                        </Button>
                    </div>
                )
            }
        </div>
    );
}

export default Category;