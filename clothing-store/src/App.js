import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './views/homepage/homepage.component'
import ShopPage from './views/shop/shop.component'
import SignInOut from './views/sign-in-out/sign-in-out.component'
import Header from './components/header/header.component'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOut} />

      </Switch>
    </div>
  );
}

export default App;
