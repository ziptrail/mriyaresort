import React, {Fragment} from 'react';
import classNames from 'classnames';

function SliderDots({ dots, sliderIndex, onClick }) {
    return (
        <Fragment>
            {dots.map(item => (
                <button className={classNames("modal-menu__slider-trigger", {
                    "modal-menu__slider-trigger_select": sliderIndex === +item,
                })} onClick={() => onClick(+item)} key={item}></button>
            ))}
        </Fragment>
    )
}

export default SliderDots;