import React from 'react';
import Sale from './Sale';
import Logos from './Logos';
import Promotion from './Promotion';
import News from './News';
import '../../App.css';
function Main() {
    return (
        <main>
            <Sale/>
            <Logos/>
            <Promotion/>
            <News/>
        </main>
    );
}

export default Main;