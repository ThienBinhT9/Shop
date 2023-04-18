import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from './Catalog.module.scss'
import Helmet from "../../components/Helmet";
import productData from "../../assets/fakeData/product";
import ProductCard from '../../components/ProductCard'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Category from "./Category";
import Search from "./Search";

const cx = classNames.bind(styles)

function Catalog() {

    const productList = productData.getAllProducts()
    const initFilter = {
        _category:[],
        _colors:[],
        _sizes:[]
    }

    const [products,setProducts] = useState(productList)
    const [filter,setFilter] = useState(initFilter)

    const selectFilter = (type,checked,item) => {
        if(checked){
            switch(type) {
                case 'CATEGORY':
                    setFilter({...filter, _category:[...filter._category, item.categorySlug]})
                    break;
                case 'COLORS':
                    setFilter({...filter, _colors:[...filter._colors,item.color]})
                    break;
                case 'SIZES':
                    setFilter({...filter,_sizes:[...filter._sizes,item.size]})
                    break;
                default:
            }
        }
        else{
            switch(type) {
                case 'CATEGORY':
                    const newCategory = filter._category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, _category:newCategory})
                    break;
                case 'COLORS':
                    const newColors = filter._colors.filter(e => e !== item.color)
                    setFilter({...filter, _colors:newColors})
                    break;
                case 'SIZES':
                    const newSizes = filter._sizes.filter(e => e !== item.size)
                    setFilter({...filter, _sizes:newSizes})
                    break;
                default:
            }
        }
    }

    const updateProducts = useCallback(() => {
        let temp = productList

        if(filter._category.length > 0){
            temp = temp.filter(e => filter._category.includes(e.categorySlug))
        }

        if(filter._colors.length > 0){
            temp = temp.filter(e => {
                const check = e.colors.find(color => filter._colors.includes(color))
                return check !== undefined
            })
        }

        if(filter._sizes.length > 0){
            temp = temp.filter(e => {
                const check = e.size.find(size => filter._sizes.includes(size))
                return check !== undefined
            })
        }

        setProducts(temp)
    },[filter,productList])

    useEffect(() => {
        updateProducts()
    },[updateProducts])

    const ClearFilter = () => {
        if(filter._category.length === 0 && filter._colors.length === 0 && filter._sizes.length === 0) 
            return
        setFilter(initFilter)
    }

    return ( 
        <Helmet title='Mục lục'>
            <div className={cx('wrapper')}>
                <Row>
                    <Col l={3} m={12} s={12}>
                        <Category filter={filter} selectFilter={selectFilter} ClearFilter={ClearFilter}/>
                    </Col>
                    <Col l={9} m={12} s={12}>
                        <Row>
                            <Col l={12} m={12} s={12} mb={20}>
                                <div className={cx('box-search')}><Search/></div>
                            </Col>
                            {
                                products.map((item,index) => {
                                    return (
                                        <Col
                                            key={index}
                                            l={3}
                                            m={3}
                                            s={6}
                                            mb={24}
                                        >
                                            <ProductCard data={item}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </Helmet>
    );
}

export default Catalog;