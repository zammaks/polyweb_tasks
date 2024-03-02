import React from 'react';
import Sale from './Sale';
import Logos from './Logos';
import Promotion from './Promotion';
import News from './News';
import '../../App.css';

const newsData = [
    {
        link: '/news1',
        image: require('../../img/new1.png'),
        starImage: require('../../img/star.svg'),
        title: 'LIB TECH',
        description: 'Мужской сноуборд',
        price: 34392,
    },
    {
        link: '/news1',
        image: require('../../img/new1.png'),
        starImage: '../../img/white star.svg',
        title: 'LIB TECH',
        description: 'Мужской сноуборд',
        price: 34392,
        discount: '-50%',

    },
    {
        link: '/news1',
        image: require('../../img/new1.png'),
        starImage: '../../img/white star.svg',
        title: 'LIB TECH',
        description: 'Мужской сноуборд',
        price: 34392,
    },
    {
        link: '/news1',
        image: require('../../img/new1.png'),
        starImage: '../../img/white star.svg',
        title: 'LIB TECH',
        description: 'Мужской сноуборд',
        price: 34392,
    },
];

function Main() {
    return (
        <main>
            <Sale/>
            <Logos/>
            <Promotion/>
            <News newsData={newsData} />
        </main>
    );
}


export default Main;