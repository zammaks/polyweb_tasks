import React from 'react';
import arrow from '../../img/arrow.svg';
function topPart() {
    return (
        <div className="header__top">
        <p className="header__region">Ваш регион доставки: Москва</p>
        <button className="header__arrow">
            <img src={arrow} alt="ваш регион" />
        </button>
        <a href="" className="header__link-market">
            Магазины
        </a>
        <a href="" className="header__link-help">
            Помощь
        </a>
        <a href="" className="header__link-blogs">
            Блоги
        </a>
        <p className="header__delivery">Бесплатна доставка *</p>
        <p className="header__pay">Оплата при получении</p>
        <p className="header__return">Возврат в течение 14 дней</p>
        </div >
    );
}
export default topPart;