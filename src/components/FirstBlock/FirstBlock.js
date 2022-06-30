import React from "react";

import Button from "../Button/Button";
import SocialLink from "../SocialLink/SocialLink";
import img_facebook from './img/facebook.svg'
import img_twitter from './img/twitter.svg'
import img_insta from './img/instagramm.svg'
import img_arrow from './img/arrow.svg'

const FirstBlock = () => {
    return (
        <div className={'first-block__container'}>
            <div className={'first-block__left-column'}>
                <p className={'title'}>FAMILY & HEALTH CLUB</p>
                <h1>Mriya<br/> Resort</h1>
                <p className={'subtitle'}>Российский курорт для всей семьи<br/>
                    на берегу черного моря</p>
                <div className={'button-panel'}>
                    <Button text = 'НАЙТИ НОМЕР' style = 'gold'/>
                    <Button text ='3D тур' style = 'white'/>
                </div>
                <div className={'strip'}></div>
                <div className={'arrow'}>
                    <img src={img_arrow} alt=""/>
                </div>
            </div>
            <div className={'first-block__right-column'}>
                <div className={'weather-info'}>
                    <p className={'temperature'}>27&#176;</p>
                    <p className={'cloud'}>Облачно</p>
                    <p className={'location'}>Ялта, Россия</p>
                </div>
                <div className={'social-list'}>
                    <SocialLink image = {img_facebook}/>
                    <SocialLink image = {img_twitter}/>
                    <SocialLink image = {img_insta}/>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock;