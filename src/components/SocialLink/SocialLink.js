import React from "react";


const SocialLink = (props) => {
    return (
        <div className={'social__container'}>
            <button className={'social__button'}>
                <img src={props.image} alt=""/>
            </button>
        </div>

    )
}

export default SocialLink;