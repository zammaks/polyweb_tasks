import React from 'react';
import P1 from '../../img/1.svg';
import P2 from '../../img/2.svg';
import P3 from '../../img/3.svg';
import P4 from '../../img/4.svg';
import P5 from '../../img/5.svg';
import P6 from '../../img/6.svg';
import P7 from '../../img/7.svg';
import P8 from '../../img/8.svg';
import P9 from '../../img/9.svg';
import P10 from '../../img/10.svg';
function Logos() {
    return (
        <section className="logos">
        <div className="logos__wrapper">
            <ul className="logos__list">
            <li className="logos__elem">
                <img src={P1} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P2} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P3} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P4} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P5} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P6} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P7} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P8} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P9} alt="" className="logos__img" />
            </li>
            <li className="logos__elem">
                <img src={P10} alt="" className="logos__img" />
            </li>
            </ul>
        </div>
        </section>
    );
    }
export default Logos;