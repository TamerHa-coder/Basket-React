import React, { useState } from 'react';
import propTypes from 'prop-types';

function BasketItem(props) {


    let basketList = [];
    props.addedItemsList.forEach(item => {
        let spanStyle;
        if(item.checked) {
           spanStyle = {textDecoration: 'line-through'};
       } else {
           spanStyle = {textDecoration:'none'};
       };
            basketList.push((<li onClick={() => props.itemChecked(item.name)}>
            <button id="remove" >-</button>
        <span style={spanStyle}>{item.amount} {item.name}</span>
        </li>));
    });

    return (
        <div>
            <ol>{basketList}</ol>
        </div>
    );
};

export default BasketItem;