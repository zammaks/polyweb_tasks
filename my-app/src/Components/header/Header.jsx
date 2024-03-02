import React from 'react';
import TopPart from './topPart';
import CenterPart from './centerPart';
import NavPart from './navPart'; 
import '../../App.css';
function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <TopPart/>
                <CenterPart/>
                <NavPart /> 
            </div>
        </header>
    );
}

export default Header;