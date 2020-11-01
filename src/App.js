import React from 'react';
import './App.css';
import HomePage from './components/home-page/home.component.jsx';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import AuthHome from './components/authentication/auth-home/auth-home.component';
import { defaultAuth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;;

  componentDidMount() {
    this.unsubscribeFromAuth = defaultAuth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})

    console.log(user);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={AuthHome}/>
        </Switch>
      </div>
    );
  }
}

export default App;
