import React, { useState } from 'react';
import './AddItem.css';

const AddItem = props => {

    const { itemAdded } = props;
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');

    const itemNameChangedHandler = (event) => {
        setItemName(event.target.value);
    }
    const priceChangedHandler = (event) => {
        setPrice(event.target.value);
    }
    const clearInputs = () => {
        setItemName('');
        setPrice('');
    }

    return (
        <div className="add-item">
            <input
                type='text'
                placeholder='Item'
                onChange={itemNameChangedHandler}
                value={itemName} />
            <input
                type='number'
                placeholder='Price'
                onChange={priceChangedHandler}
                value={price} />
            <button className='add-btn' onClick={() => itemName && price !== '' ? itemAdded(itemName, price) : null}>Add Item</button>
            {itemName || price !== '' ? <button className='clear-btn' onClick={clearInputs}>Clear</button> : null}
        </div>
    )

}

export default AddItem;