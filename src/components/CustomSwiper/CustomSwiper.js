import React, {Fragment} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img_one_slide from './img/slide_1.png'
import img_two_slide from './img/slide_2.png'
import img_three_slide from './img/slide_3.png'


const CustomSwiper = () => {
    return(
        <Fragment>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                speed={1500}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className={'allinclusive__container'}>
                        <div className={'allinclusive__one-columns'}>
                            <div className={'allinclusive__one-columns-content'}>
                                <div className={'allinclusive__one-columns-one-elem'}>
                                    <img src={img_one_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Заниматесь в тренажерном зале и посещайте групповые тренировки</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                                <div className={'allinclusive__one-columns-two-elem'}>
                                    <h3>Оздоровление</h3>
                                    <p className={'sanitation'}>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</p>
                                    <img src={img_two_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Питаться в ресторане шведской линии согласно выбранному варианту</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className={'allinclusive__two-columns'}>
                            <img src={img_three_slide} alt=""/>
                            <div className={'allinclusive__two-columns-content'}>
                                <div className={'allinclusive__content'}>
                                    <p>Исследовать все общедоступные зоны и территории комплекса</p>
                                    <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'allinclusive__container'}>
                        <div className={'allinclusive__one-columns'}>
                            <div className={'allinclusive__one-columns-content'}>
                                <div className={'allinclusive__one-columns-one-elem'}>
                                    <img src={img_one_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Заниматесь в тренажерном зале и посещайте групповые тренировки</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                                <div className={'allinclusive__one-columns-two-elem'}>
                                    <h3>Оздоровление</h3>
                                    <p className={'sanitation'}>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</p>
                                    <img src={img_two_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Питаться в ресторане шведской линии согласно выбранному варианту</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className={'allinclusive__two-columns'}>
                            <img src={img_three_slide} alt=""/>
                            <div className={'allinclusive__two-columns-content'}>
                                <div className={'allinclusive__content'}>
                                    <p>Исследовать все общедоступные зоны и территории комплекса</p>
                                    <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'allinclusive__container'}>
                        <div className={'allinclusive__one-columns'}>
                            <div className={'allinclusive__one-columns-content'}>
                                <div className={'allinclusive__one-columns-one-elem'}>
                                    <img src={img_one_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Заниматесь в тренажерном зале и посещайте групповые тренировки</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                                <div className={'allinclusive__one-columns-two-elem'}>
                                    <h3>Оздоровление</h3>
                                    <p className={'sanitation'}>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</p>
                                    <img src={img_two_slide} alt=""/>
                                    <div className={'allinclusive__content'}>
                                        <p>Питаться в ресторане шведской линии согласно выбранному варианту</p>
                                        <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className={'allinclusive__two-columns'}>
                            <img src={img_three_slide} alt=""/>
                            <div className={'allinclusive__two-columns-content'}>
                                <div className={'allinclusive__content'}>
                                    <p>Исследовать все общедоступные зоны и территории комплекса</p>
                                    <a href="#" className={'allinclusive__link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Fragment>
    )
}

export default CustomSwiper;