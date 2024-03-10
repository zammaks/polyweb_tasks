import React, { useState } from 'react';
// import './Card.css'

const Card = ({ item, onContextMenu }) => {
    const [Favorite, setFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        setFavorite(!Favorite);
    };
    return (
        <div className={`card ${Favorite ? 'favorite' : ''}`} onContextMenu={onContextMenu}>
            <img src={item.url} alt="item" />
            <button onClick={handleFavoriteToggle}>{Favorite ? 'NotFavorite' : 'Favorite'}</button>
        </div>
    );
};

export default Card;
