import React from 'react';
import './App.css';
import HomePage from './components/home-page/home.component.jsx';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import AuthHome from './components/authentication/auth-home/auth-home.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/auth' component={AuthHome}/>
      </Switch>
    </div>
  );
}

export default App;
