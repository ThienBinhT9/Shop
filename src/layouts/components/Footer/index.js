import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'
import logo from '../../../assets/images/Logo-2.png'
import Row from '../../../components/Row'
import Col from '../../../components/Col'

const cx = classNames.bind(styles)
const datacontactFooter = [
    {
        title:'TỔNG ĐÀI HỖ TRỢ',
        children:[
            {
                desc:'Liên hệ đặt hàng',
                tel:'0969975192'
            },
            {
                desc:'Thắc mắc đơn hàng',
                tel:'0969975192'
            },
            {
                desc:'Góp ý khiếu lại',
                tel:'0969975192'
            },
        ]
    },
    {
        title:'VỀ YOLO',
        children:[
            {
                desc:'Giới thiệu',
                to:'/'
            },
            {
                desc:'Liên hệ',
                to:'/contact'
            },
            {
                desc:'Tuyển dụng',
                to:'/'
            },
            {
                desc:'Tin tức',
                to:'/'
            },
            {
                desc:'Hệ thống cửa hàng',
                to:'/'
            },
        ]
    },
    {
        title:'CHĂM SÓC KHÁCH HÀNG',
        children:[
            {
                desc:'Chính sách đổi trả',
                to:'/help'
            },
            {
                desc:'Chính sách bảo hàng',
                to:'/help'
            },
            {
                desc:'Chính sách hoàn tiền',
                to:'/help'
            }
        ]
    },
]


function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Row>
                    {
                        datacontactFooter.map((item,index) => {
                            return (
                                <Col key={index} l={3} m={6} s={12} mb={30}>
                                    <Item data={item} />
                                </Col>
                            )
                        })
                    }
                    <Col l={3} m={6} s={12} mb={30}>
                        <div className={cx('logo')}>
                            <img src={logo} alt='logo'/>
                        </div>
                        <p className={cx('desc')}>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động tích cực hơn
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const Item = ({data}) => {
    return (
        <div className={cx('item')}>
            <h3 className={cx('item__title')}>{data.title}</h3>
            <div className={cx('item__body')}>
                {
                    data.children.map((data_item,index) => {
                        return (
                            <Link 
                                to={data_item.to} 
                                key={index}
                                className={cx('item__body__item')}
                            >
                                {data_item.desc}
                                {data_item.tel && <a className={cx('tel')} href={`tel:${data_item.tel}`}>{data_item.tel}</a>}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer;