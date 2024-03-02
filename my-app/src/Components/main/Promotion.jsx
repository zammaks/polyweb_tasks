import React from 'react';
function Promotion() {
    return (
        <section className="promotion">
            <div className="promotion__wrapper">
                <img src={require('../../img/sale1.jpeg')} alt="" className="promotion__img" />
                <p className="promotion__text">НАЗВАНИЕ АКЦИИ 1</p>
                <img src={require('../../img/sale2.jpeg')} alt="" className="promotion__img" />
                <p className="promotion__text">НАЗВАНИЕ АКЦИИ 2</p>
            </div>
        </section>
    );
    }
export default Promotion;
