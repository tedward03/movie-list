import React from 'react';

const initialState = {
    items: ["Init"],
    ah: 'AAAAHHHH',
};


export default function reducer(state = initialState, {type: type, payload: payload}) {
    switch (type) {
        case 'ADD-ITEM':
            console.log("ADD", state);
            return {...state, items: [...state.items, payload.term]};
        case 'REMOVE-ITEM':
            console.log("REMOVE", state);
            const newItems = [...state.items];
            newItems.splice(newItems.indexOf(payload.term), 1);
            return {...state, items: newItems};
        default:
            console.log("DEFAULT", state)
            return state;
    }
}

