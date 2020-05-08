import * as actionTypes from './actions';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: new Date().valueOf(),
                itemName: action.payload.itemName,
                price: action.payload.price
            }
            return {
                ...state,
                items: state.items.concat(newItem)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            }
    }
    return state;
};

export default reducer;