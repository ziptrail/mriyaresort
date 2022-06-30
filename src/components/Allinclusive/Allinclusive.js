import React, {Fragment} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CustomSwiper from '../CustomSwiper/CustomSwiper';

import img_one_slide from './img/slide_1.png';
import img_two_slide from './img/slide_2.png';
import img_three_slide from './img/slide_3.png';

const Allinclusive = () => {
    return(
        <Fragment>
            <CustomSwiper />
        </Fragment>
    )
}

export default Allinclusive;