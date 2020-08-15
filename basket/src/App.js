import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BasketArea from './BasketArea'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div className="App">
 				<Header />
				 <BasketArea />
				 <Footer />
            </div>
        );
    }
}

export default App;

