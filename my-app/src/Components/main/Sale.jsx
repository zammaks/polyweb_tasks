import React from 'react';
import Central from '../../img/central.jpeg';
import Right from '../../img/right.jpeg';
import ArrowLeft from '../../img/arrow-left.svg';
import ArrowRight from '../../img/arrow-right.svg';
function Sale() {
    return (
    <section className="sale">
    <div className="sale__wrapper">
        <h1 className="sale__hidden">Boardriders</h1>
        <div className="sale__pictures">
        <img src={require('../../img/left.jpeg')} alt="" className="sale__left-img" />
        <img src={Central} alt="" className="sale__central-img" />
        <img src={Right} alt="" className="sale__right-img" />
        <button className="sale__scroll-left">
            <img
            src={ArrowLeft}
            alt="влево"
            className="sale__arrow-left"
            />
        </button>
        <h2 className="sale__central-text">WINTER SALE ДО -70%</h2>
        <button className="sale__scroll-right">
            <img
            src={ArrowRight}
            alt="вправо"
            className="sale__arrow-right"
            />
        </button>
        </div>
    </div>
    </section>
    );
    }

export default Sale;