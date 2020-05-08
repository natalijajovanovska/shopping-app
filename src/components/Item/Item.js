import React from 'react';
import './Item.css';

const item = props => {

    const { clicked, itemName, price } = props;
    
    return (
        <div className="item">
            <h1>{itemName}</h1>
            <p>${price}</p>
            <button className='delete-btn' onClick={clicked}>Delete</button>
        </div>
    );
}

export default item;