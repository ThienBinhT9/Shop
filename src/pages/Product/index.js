import { useEffect } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Helmet from "../../components/Helmet";
import productData from "../../assets/fakeData/product";
import Section,{SectionBody,SectionTitle} from "../../components/Section";
import ProductCard from "../../components/ProductCard";
import styles from './Product.module.scss'
import ProductView from "../../components/ProductView";

const cx = classNames.bind(styles)

function Product() {
    const {id} = useParams()
    const product = productData.getProductBySlug(id)
    const relatedProducts = productData.getProducts(8)



    useEffect(() => {
        window.scrollTo(0,0)
    },[product])

    return ( 
        <Helmet title='Sản Phẩm'>
            <div className={cx('wrapper')}>
                <div className={cx('productOverview')}>
                    <Section>
                        <SectionBody>
                            <ProductView product={product}/>
                        </SectionBody>
                    </Section>
                </div>
                <div className={cx('related')}>
                    <Section>
                        <SectionTitle>Khám phá thêm</SectionTitle>
                        <SectionBody>
                            <Row>
                                {
                                    relatedProducts.map((item,index) => {
                                        return (
                                            <Col key={index} l={2} m={3} s={6} mb={24}>
                                                <ProductCard data={item}/>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </SectionBody>
                    </Section>
                </div>
            </div>
        </Helmet>
    );
}

export default Product;