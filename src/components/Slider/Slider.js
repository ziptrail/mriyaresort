import React, {useState} from "react";

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import prev from "./img/prev.svg";
import next from "./img/next.svg";

const Slider = ()=>{

    const [menuListState, setMenuListState] = useState(0);

    if (menuListState > 2) {
        setMenuListState(0)
    } else if (menuListState < 0) {
        setMenuListState(2)
    }

    function handleClick(){
        let tabNav = document.querySelectorAll('.slider__tabs'),
            tabContent = document.querySelectorAll('.slider__tabs-content'),
            im = document.querySelectorAll('.im'),
            tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav);
        })

        im.forEach(item => {
            item.addEventListener('click', selectTabNav);
        })

        function selectTabNav(){
            tabNav.forEach(item=>{
                item.classList.remove('active-tabs');
            });

            this.classList.add('active-tabs');
            tabName = this.getAttribute('tab-name');
            selectTabContent(tabName);
            console.log(tabName)
        }

        function selectTabContent(tabName){
            tabContent.forEach(item =>{
                item.classList.contains(tabName) ? item.classList.add('active-tabs') : item.classList.remove('active-tabs');
            })
        }
    }

    return(
        <div className={'slider__wrapper'}>
            <div className={'slider__navbar'}>
                <div className={'slider__navbar-tabs'}>
                    <div className={'slider__tabs active-tabs'} onClick={handleClick} tab-name = 'tab-1'>СПЕЦПРЕЛОЖЕНИЯ</div>
                    <div className={'slider__tabs'} onClick={handleClick} tab-name = 'tab-2'>АФИША</div>
                    <div className={'slider__tabs'} onClick={handleClick} tab-name = 'tab-3'>КАТЕГОРИИ ОТДЫХА</div>
                </div>
                <div className={'slider__navbar-buttons'}>
                    <a href="#" className="togglehref" onClick={handleClick} tab-name='tab-1' ><img src= {prev} alt="" /></a>
                    <a href="#" className="togglehref" onClick={handleClick} tab-name='tab-1' ><img src= {next} alt="" /></a>
                </div>
            </div>
            <div className={'slider__content'}>
                <div className={'slider__tabs-content active-tabs tab-1'}>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-discount'}>
                            <h3>-20%</h3>
                            <p>Для тех кто рядом</p>
                        </div>
                        <img src={img1} alt=""/>
                    </div>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-discount'}>
                            <h3>-10%</h3>
                            <p>Раннее бронирование</p>
                        </div>
                        <img src={img2} alt=""/>
                    </div>
                </div>
                <div className={'slider__tabs-content tab-2'}>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-discount'}>
                            <h3>-10%</h3>
                            <p>Раннее бронирование</p>
                        </div>
                        <img src={img2} alt=""/>
                    </div>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-discount'}>
                            <h3>-20%</h3>
                            <p>Для тех кто рядом</p>
                        </div>
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className={'slider__tabs-content tab-3'}>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-rest'}>
                            <p>Семейный отдых</p>
                        </div>
                        <img src={img3} alt=""/>
                    </div>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-rest'}>
                            <p>Оздоровление</p>
                        </div>
                        <img src={img4} alt=""/>
                    </div>
                    <div className={'slider__tabs-item'}>
                        <div className={'slider__tabs-item-rest'}>
                            <p>Релакс и красота</p>
                        </div>
                        <img src={img5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;