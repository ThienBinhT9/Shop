import classNames from "classnames/bind";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'

import styles from './Slides.module.scss'
import { data as dataSlide } from '../../assets/fakeData/slides'
import Button from '../Button'

const cx = classNames.bind(styles)

function Slides() {
    return ( 
        <div classNames={cx('wrapper')}>

            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Autoplay,Navigation]}
                navigation={true}
                pagination={true}
                autoplay={{delay:3000}}
            >
                {
                    dataSlide.map((item,index) => {
                        return (
                            <SwiperSlide key={index}>
                                {({isActive}) => (
                                    <div className={cx('slide__item',{active:isActive})} style={window.innerWidth <= 600 ? {backgroundImage:`url(${item.img})`} : {}}>
                                        <div className={cx('slide__item__info')}>
                                            <div className={cx('slide__item__info__content')}>
                                                <p className={cx('slide__item__title')}>{item.title}</p>
                                                <span className={cx('slide__item__decs')}>{item.decs}</span>
                                                <Button 
                                                    primary
                                                    className={cx('btn-slide')}
                                                >
                                                    Xem thêm
                                                </Button>
                                            </div>
                                            <div className={cx('slide__item__image')}>
                                                <img src={item.img}/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slides;