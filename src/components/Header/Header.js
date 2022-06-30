import React, {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../App.css';

import img_close from './img/close.svg'
import img_facebook from './img/facebook.svg'
import img_insta from './img/instagram.svg'
import img_twitter from './img/twitter.svg'
import img_slide from './img/photo.png'
import img_key from './img/360/key.svg'
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../Button/Button";

const Header = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(1);


    function handleHover() {
        if (window.innerWidth < 1440) {
            setIsHovered(!isHovered);
        }
    }
    
    if (sliderIndex > 3) {
        setSliderIndex(1);
    } else if (sliderIndex < 1) {
        setSliderIndex(3);
    }

    useEffect(() => {
        let sliderTimer = setInterval(() => {
            setSliderIndex((sliderIndex) => sliderIndex + 1);
        }, 3 * 1000);
        return () => clearInterval(sliderTimer);
    }, []);

    function openClick() {
        let openButton = document.querySelector('.open'),
            menu = document.querySelector('.header-menu');

        function showMenu() {
            menu.classList.remove('hide');
            menu.classList.add('show');
        }

        showMenu();
    }

    function closeClick() {
        let menu = document.querySelector('.header-menu'),
            closeButton = document.querySelector('.close-menu');

        function hideMenu() {
            menu.classList.remove('show');
            menu.classList.add('hide');
        }

        hideMenu();
    }

    function showService(event) {
        const serviceName = document.querySelectorAll('.service-name'),
            service = document.querySelectorAll('.service'),
            tag = event.target.getAttribute('name');

        console.log(event.target.getAttribute('name'))

        service.forEach(item=>{
            item.classList.add('hide');
            if(item.classList.contains(tag)){
                item.classList.remove('hide')
                item.classList.add('show');
            }else{
                item.classList.remove('show');
            }
        })
    }

    return (
        <header className={'header'}>
            <div className={'header-container'}>
                <div className={'open'} onClick={openClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={'nav nav-left'}>
                    <a href="">О КОМПЛЕКСЕ</a>
                    <a href="">БЛОГ</a>
                    <a href="">FAQ</a>
                    <a href="">КОНТАКТЫ</a>
                </nav>
                <div className={'header-logo'}></div>
                <div className={'sign-in-360'}><img src={img_key} alt=""/></div>
                <nav className={'nav nav-right'}>
                    <div className={'lang'}>
                        <a href="">RU</a>
                        <a href="">ENG</a>
                    </div>
                    <div className={'account'}>
                        <a href="" className={'sign-in'}>ВХОД</a>
                        <a href="" className={'phone'}>8 800 500 6847</a>
                    </div>
                </nav>
            </div>
            <div className={'header-menu hide'}>
                <div className={'header-menu-container'}>
                    <div className={'header-menu-nav'}>
                        <div className={'header-menu-nav-buttons'}>
                            <a href="">О КОМПЛЕКСЕ</a>
                            <a href="">БЛОГ</a>
                            <a href="">FAQ</a>
                            <a href="">КОНТАКТЫ</a>
                        </div>
                        <div className={'header-menu-nav-sign_in'}>
                            <a href="">ВХОД</a>
                        </div>
                    </div>
                    <div className={'header-menu-content'}>
                        <div className={'header-menu-content-social'}>
                            <ul>
                                <li><img src={img_facebook} alt=""/></li>
                                <li><img src={img_twitter} alt=""/></li>
                                <li><img src={img_insta} alt=""/></li>
                            </ul>
                        </div>
                        <div className={'header-menu-content-type-services'}>
                            <ul>
                                <li className={'service-name'} name='placement' onMouseOver={showService}>Размещение
                                </li>
                                <li className={'service-name'} name='medicine' onMouseOver={showService} onMouseEnter={handleHover} onMouseLeave={handleHover}>Медицина</li>
                                <div className={isHovered ? 'subservice-name show' : 'subservice-name hide'}>
                                    <ul>
                                        <li>Клиника персонализированной медицины</li>
                                        <li>Медицинский центр</li>
                                    </ul>
                                </div>
                                <li className={'service-name'} name='events' onMouseOver={showService}>Мероприятия</li>
                                <li className={'service-name'} name='beauty' onMouseOver={showService}>Красота и
                                    восстановление
                                </li>
                                <li className={'service-name'} name='bar' onMouseOver={showService}>Бары и рестораны
                                </li>
                                <li className={'service-name'} name='entertainment'
                                    onMouseOver={showService}>Развлечения
                                </li>
                                <li className={'service-name'} name='sport' onMouseOver={showService}>Спорт</li>
                                <li className={'service-name'} name='child' onMouseOver={showService}>Детям</li>
                                <li className={'service-name'} name='transport' onMouseOver={showService}>Транспорт</li>
                            </ul>
                        </div>
                        <div className={'header-menu-content-services'}>
                            <div className={'service placement show'}>
                                <ul>
                                    <li>Контент блока "Размещение"</li>
                                </ul>
                                </div>
                            <div className={'service medicine hide'}>
                                <ul>
                                    <li>Клиника персонализированной медицины</li>
                                    <li>Медицинский центр</li>
                                </ul>
                                <div>
                                    <p>Международные стандарты лечения и современные методики в сочетании с высококлассным
                                        сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA
                                        5* </p>
                                </div>
                            </div>
                            <div className={'service events hide'}>
                                <ul>
                                    <li>Контент блока "Мероприятия"</li>
                                </ul>
                            </div>
                            <div className={'service beauty hide'}>
                                <ul>
                                    <li>Контент блока "Красота и восстановление"</li>
                                </ul>
                            </div>
                            <div className={'service bar hide'}>
                                <ul>
                                    <li>Контент блока "Бары и рестораны"</li>
                                </ul>
                            </div>
                            <div className={'service entertainment hide'}>
                                <ul>
                                    <li>Контент блока "Развлечения"</li>
                                </ul>
                            </div>
                            <div className={'service sport hide'}>
                                <ul>
                                    <li>Контент блока "Спорт"</li>
                                </ul>
                            </div>
                            <div className={'service child hide'}>
                                <ul>
                                    <li>Контент блока "Детям"</li>
                                </ul>
                            </div>
                            <div className={'service transport hide'}>
                                <ul>
                                    <li>Контент блока "Транспорт"</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'header-menu-content-slider'}>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: '.modal-menu__slider-trigger_select',
                                    dynamicBullets: true,
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                            </Swiper>
                            <div className={'swiper-pagination'}></div>
                            <div className={'slider__info'}>
                                <div>
                                    <h2>Анитистресс</h2>
                                    <p>10-21 дня</p>
                                    <Button style = 'gold slider-button' text = 'Подробнее'/>
                                </div>
                            </div>
                        </div>
                        <div className={'header-menu-footer'}>
                            <p>info@mriyaresort.com</p>
                        </div>
                    </div>

                </div>
                <div className={'close-menu'} onClick={closeClick}>
                    <img src={img_close} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;