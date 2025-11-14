import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/plant-shop">
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/products" component={ProductListing} />
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
