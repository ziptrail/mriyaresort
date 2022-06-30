import React from "react";

import Slider from "../Slider/Slider";
import Button from "../Button/Button";

const ChoiceHoliday = () => {
    return(
        <div className={'choice-holiday__wrapper'}>
            <div className={'choice-holiday__form-container'}>
                <h2 className={'choice-holiday__title'}>Выберите свой отдых</h2>
                <form action="" className={'choice-holiday__form'}>
                    <div className={'input__container'}>
                        <div className={'input__type-wrapper'}>
                            <input type="text" className={'input__type'} value = 'Семейный отдых' readOnly/>
                        </div>
                        <div className={'input__date-wrapper'}>
                            <input type="text" className={'input__date'} value= 'пт, 8 мая — вс, 17 мая' readOnly/>
                        </div>
                        <div className={'input__person-wrapper'}>
                            <input type="text" className={'input__persons'} value = '2 взрослых  •  без детей  •  1 номер' readOnly/>
                        </div>
                        <input type="submit" className={'input__submit'} value = 'Найти' readOnly/>
                    </div>
                </form>
                <Slider />
            </div>
            <div>
                <div className={'choice-holiday__content'}>
                    <h2 className={'choice-holiday__content-title'}><span>Mriya Resort & SPA —</span><br/> больше чем просто отдых</h2>
                    <p>В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это место идеально для тех, кто больше гор любит только море.</p>
                    <Button text = 'О КОМПЛЕКСЕ' style ='white'/>
                </div>
            </div>
        </div>
    )
}

export default ChoiceHoliday;