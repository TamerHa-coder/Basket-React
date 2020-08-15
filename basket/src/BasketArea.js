import React, { useState, Children } from 'react';
import propTypes from 'prop-types';
import SearchArea from './SearchArea'
import GroceriesList from './GroceriesList'
import BasketList from './BasketList'

function BasketArea(props) {

    const [addedItemsList, setAddedItemList] = useState([
        { name: 'Bananas', amount: 3, checked: false },
        { name: 'Ice Cream', amount: 3, checked: false },
        { name: 'Beef', amount: 3, checked: false },
        { name: 'Eggs', amount: 3, checked: false },
        { name: 'Cheese', amount: 3, checked: false },
    ]);
   const [placeHolder,setPlaceHolder] = useState('')
    const addNewItem = (newItem) => {
        setPlaceHolder('');
        searchItem('')
        let ifExist = false;
        let cloneList = addedItemsList.slice();
        if (cloneList[0].amount === undefined) { cloneList.splice(0) }
        cloneList.forEach((item) => {
            if (item.name === newItem) {
                item.amount++;
                ifExist = true;
            }
        });
        if (ifExist) {
            setAddedItemList(cloneList)
        } else {
            cloneList.push({ name: newItem, amount: 1, checked: false })
            setAddedItemList(cloneList);
        }
    }

    const itemChecked = (itemName) => {
        let cloneList = addedItemsList.slice()
        cloneList.forEach((item) => {
            if (item.name === itemName) {
                item.checked ? item.checked = false : item.checked = true
            }
        }); setAddedItemList(cloneList)
    }

    const clearBasket = () => {
        setAddedItemList([{ name: 'Your basket is empty!' }])
    }

    const items = [
        'Apples', 'Pears', 'Bananas', 'Grapes', 'Onions', 'Cheese', 'Hot-Dogs', 'Beef', 'Pork',
        'Fish', 'Turkey', 'Milk', 'Eggs', 'Ice Cream', 'Sugar', 'Ketchup', 'Rice', 'Pasta', 'Bread']

    const [itemsToSend, setItemsToSend] = useState(items)
    function searchItem(value) {
        setPlaceHolder(value);
        debugger
        let cloneList = items.slice();
        let lowerCaseValue = value.toLowerCase();
        let resultsSearch = [];
        cloneList.forEach(product => {
            let lowerCaseName = product.toLowerCase();
            if (lowerCaseName.includes(lowerCaseValue)) {
                resultsSearch = resultsSearch.concat([product])
            };
        }); setItemsToSend(resultsSearch)
    };

    return (
        <div>
            <SearchArea searchItem={searchItem} searchPlaceHolder={placeHolder}/>
            <div className="main">
                <GroceriesList plusItem={addNewItem} items={itemsToSend} />
                <BasketList addedItemsList={addedItemsList} itemChecked={itemChecked} clearBasket={clearBasket} />
            </div>
        </div>
    );
}

export default BasketArea;