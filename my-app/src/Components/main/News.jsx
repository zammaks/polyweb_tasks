import React from 'react';
import ArrowRight from '../../img/arrow-right.svg';
import ArrowLeft from '../../img/arrow-left.svg';
import Star from '../../img/star.svg';
import WhiteStar from '../../img/white star.svg';
function News() {
    return (
        <section className="news">
            <div className="news__wrapper">
                <h3 className="news__title">Новинки</h3>
                <button className="news__scroll-left">
                    <img src={ArrowLeft} alt="влево" className="news__arrow-left" />
                </button>
                <ul className="news__list">
                    <li className="news__card">
                        <a href="" className="news__card-link">
                            <div className="card__img-wrapper">
                                <img src={require('../../img/new1.png')} alt="" className="card__img" />
                                <button className="card__star-wrapper star-black">
                                    <img src={WhiteStar} alt="" className="card__star-img" />
                                </button>
                            </div>
                            <h4 className="card__title">LIB TECH</h4>
                            <p className="card__description">Мужской сноуборд</p>
                            <p className="card__price">34392 ₽</p>
                        </a>
                    </li>
                    <li className="news__card">
                        <a href="" className="news__card-link">
                            <div className="card__img-wrapper">
                                <img src={require('../../img/new2.png')} alt="" className="card__img" />
                                <button className="card__star-wrapper">
                                    <img src={Star} alt="" className="card__star-img" />
                                </button>
                                <span className="card__sale">-50%</span>
                            </div>
                            <h4 className="card__title">LIB TECH</h4>
                            <p className="card__description">Мужской сноуборд</p>
                            <p className="card__price old-price">34392 ₽</p>
                            <p className="card__price new-price">17392 ₽</p>
                        </a>
                    </li>
                    <li className="news__card">
                        <a href="" className="news__card-link">
                            <div className="card__img-wrapper">
                                <img src={require('../../img/new3.png')} alt="" className="card__img" />
                                <button className="card__star-wrapper">
                                    <img src={Star} alt="" className="card__star-img" />
                                </button>
                            </div>
                            <h4 className="card__title">LIB TECH</h4>
                            <p className="card__description">Мужской сноуборд</p>
                            <p className="card__price">34392 ₽</p>
                        </a>
                    </li>
                    <li className="news__card">
                        <a href="" className="news__card-link">
                            <div className="card__img-wrapper">
                                <img src={require('../../img/new4.png')} alt="" className="card__img" />
                                <button className="card__star-wrapper">
                                    <img src={Star} alt="" className="card__star-img" />
                                </button>
                            </div>
                            <h4 className="card__title">LIB TECH</h4>
                            <p className="card__description">Мужской сноуборд</p>
                            <p className="card__price">34392 ₽</p>
                        </a>
                    </li>
                </ul>
                <button className="news__scroll-right">
                    <img
                        src={ArrowRight}
                        alt="вправо"
                        className="news__arrow-right"
                    />
                </button>
                <a href="" className="news__show-more">
                    Показать больше
                </a>
            </div>
        </section>
    );
}
export default News;