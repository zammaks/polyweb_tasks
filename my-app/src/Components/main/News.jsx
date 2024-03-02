import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../img/star.svg';
import ArrowLeft from '../../img/arrow-left.svg';
import ArrowRight from '../../img/arrow-right.svg';


function News(props) {
    const { newsData } = props;
    return (
        <section className="news">
            <div className="news__wrapper">
                <h3 className="news__title">Новинки</h3>
                <button class="sale__scroll-left">
                    <img src={ArrowLeft} alt="влево" className="sale__arrow-left"/>
                </button>
                <ul className="news__list">
                    {newsData.map((item, index) => (
                        <li key={index} className="news__card">
                            <a href={item.link} className="news__card-link">
                                <div className="card__img-wrapper">
                                    <img src={item.image} alt="" className="card__img" />
                                    <button className="card__star-wrapper">
                                        <img src={Star} alt="" className="card__star-img" />
                                    </button>
                                    {item.discount && <span className="card__sale">{item.discount}</span>}
                                </div>
                                <h4 className="card__title">{item.title}</h4>
                                <p className="card__description">{item.description}</p>
                                <p className={`card__price ${item.discount ? 'old-price' : 'new-price'}`}>
                                    {item.price} ₽
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
                <button class="news__scroll-right">
                    <img src={ArrowRight} alt="вправо" className="news__arrow-right"/>
                </button>
                <a href="" class="news__show-more">Показать больше</a>
            </div>
        </section>
    );
}

News.propTypes = {
    newsData: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        starImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.string,
    })).isRequired,
};

export default News;
