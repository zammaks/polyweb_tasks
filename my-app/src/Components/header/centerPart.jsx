import React from 'react';
import Logo from '../../img/logo.svg';
import Input from '../../img/input.svg';
import Liked from '../../img/liked.svg';
import Basket from '../../img/basket.svg';
import Search from '../../img/search.svg';
function centerPart() {
    return (
        <div className="header__center">
        <a href="" className="header__man">
            Мужчинам
        </a>
        <a href="" className="header__woman">
            Женщинам
        </a>
        <a href="" className="header__children">
            Детям
        </a>
        <a href="" className="header__logo">
            <img src={Logo} alt="логотип" className="header__logo-img" />
        </a>
        <a href="" className="header__input">
            <img src={Input} alt="войти" className="header__input-logo" />
            <span className="header__input-text">Войти</span>
        </a>
        <a href="" className="header__liked">
            <img src={Liked} alt="избранное" className="header__liked-logo" />
            <span className="header__liked-text">Избранное</span>
        </a>
        <a href="" className="header__basket">
            <img src={Basket} alt="корзина" className="header__basket-logo" />
            <span className="header__basket-text">Корзина</span>
        </a>
        <a href="" className="header__search">
            <img src={Search} alt="поиск" className="header__search-logo" />
            <span className="header__search-text">Поиск</span>
        </a>
        </div>
    );
    }
export default centerPart;