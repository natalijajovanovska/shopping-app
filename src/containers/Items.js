import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
import * as actionTypes from '../store/actions';

const Items = props => {

    const { onAddedItem, items, onRemovedItem } = props;

    return (
        <div>
            <AddItem itemAdded={onAddedItem} />
            {items.map(item => (
                <Item
                    key={item.id}
                    itemName={item.itemName}
                    price={item.price}
                    clicked={() => onRemovedItem(item.id)} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedItem: (itemName, price) => dispatch({ type: actionTypes.ADD_ITEM, payload: { itemName: itemName, price: price } }),
        onRemovedItem: (id) => dispatch({ type: actionTypes.REMOVE_ITEM, itemId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);