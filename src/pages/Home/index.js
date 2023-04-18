import classNames from 'classnames/bind'
import Slides from '../../components/Slides';

import styles from './Home.module.scss'
import Helmet from '../../components/Helmet';
import Section,{ SectionTitle, SectionBody } from '../../components/Section'
import PolicyCard from '../../components/PolicyCard'
import policy  from '../../assets/fakeData/policy.js'
import productData from '../../assets/fakeData/product';
import ProductCard from '../../components/ProductCard'
import Row from '../../components/Row';
import Col from '../../components/Col';
import banner from '../../assets/images/banner.png'

const cx = classNames.bind(styles)


function Home() {

    return ( 
        <Helmet title='Trang chủ'>
            {/**Slider */}
            <Slides />
            {/*End slide */}
 
            {/**Policy Section */}
            <Section>
                <SectionBody className={cx('mt-70')}>
                    <Row>
                        {
                            policy.map((item,index) => {
                                return (
                                    <Col key={index} l={3} m={6} s={12} mb={25}>
                                        <PolicyCard data={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </SectionBody>
            </Section>
            {/**End Policy Section */}
         
            {/**Best selling Section */}
            <Section>
                <SectionTitle>Sản Phẩm Bán Chạy Trong Tuần</SectionTitle>
                <SectionBody>
                    <Row>
                        {
                            productData.getProducts(6).map((item,index) => {
                                return (
                                    <Col key={index} l={3} m={4} s={6} mb={30}>
                                        <ProductCard data={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </SectionBody>
            </Section>
            {/**End Best Selling Section */}

            {/**New Product */}
            <Section>
                <SectionTitle>Sản Phẩm Mới</SectionTitle>
                <SectionBody>
                    <Row>
                        {
                            productData.getProducts(12).map((item,index) => {
                                return (
                                    <Col key={index} l={2} m={4} s={6} mb={24}>
                                        <ProductCard data={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </SectionBody>
            </Section>
            {/**End New Product */}

            {/**Banner */}
            <Section>
                <SectionBody>
                    <img src={banner} alt='banner'/>
                </SectionBody>
            </Section>
            {/**End Banner */}

            {/** Popular Section*/}
            <Section>
                <SectionTitle>Phổ Biến</SectionTitle>
                <SectionBody>
                    <Row>
                        {
                            productData.getProducts(9).map((item,index) => {
                                return (
                                    <Col key={index} l={3} m={4} s={6} mb={20}>
                                        <ProductCard data={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </SectionBody>
            </Section>
            {/**End Popular Section*/}
            
        </Helmet>
    );
}

export default Home;