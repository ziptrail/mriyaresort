import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from "swiper";

import "react-tabs/style/react-tabs.css";

const TabPanelCustom = () => {
  return (
    <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
    >
        <SwiperSlide><div>232323</div></SwiperSlide>
        <SwiperSlide><div>232323</div></SwiperSlide>
        <SwiperSlide><div>232323</div></SwiperSlide>
    </Swiper>
  );
};

export default TabPanelCustom;