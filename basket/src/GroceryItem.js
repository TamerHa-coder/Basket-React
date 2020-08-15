import React, { useState } from 'react';
import propTypes from 'prop-types';


function GroceryItem(props) {

    let itemContainer = []
    props.items.forEach(element => {
       // debugger
        itemContainer.push(<li key = {element} onClick={() => props.addItem(element)}>
            <button id="add">+</button>
            <span>{element}</span>
        </li>)
    });

    return (
        <div>
            <ol>{itemContainer}</ol>
        </div>
    );
}

export default GroceryItem;