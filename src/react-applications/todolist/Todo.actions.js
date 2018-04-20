import React from 'react';


export function addItem(term) {
    console.log("ADD",term);
    return {
        type: "ADD-ITEM",
        payload: {term: term},
    }

}

export function removeItem(term) {
    console.log("REMOVE",term);
    return {
        type: "REMOVE-ITEM",
        payload: {term: term},
    }
}