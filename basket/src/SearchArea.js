import React, { useState } from 'react';
import propTypes from 'prop-types';


function SearchArea(props) {


    const onInputChange = event => {
        props.searchItem(event.target.value);
    }

    return (
        <nav>
            <span>Search your desire:</span>
            <input onChange={onInputChange} placeholder='Item Name...' value={props.searchPlaceHolder}></input>
        </nav>
    );
}


export default SearchArea;  