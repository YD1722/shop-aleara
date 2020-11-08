import React from "react";
import "./App.css";

import HomePage from "./components/home-page/home.component.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import AuthHome from "./components/authentication/auth-home/auth-home.component";
import {
  defaultAuth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user-actions";
import { connect } from "react-redux";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = defaultAuth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }

        setCurrentUser(userAuth);
      }
    );
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthHome} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
