import React, { Component } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Navigation from '../Navigation';
import { withFirebase } from '../Firebase';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <React.StrictMode>
          <BrowserRouter>
              <Navigation authUser={this.state.authUser}/>
              <hr />
              <Routes>
                <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>} />
                <Route path={ROUTES.SIGN_IN} element={<SignInPage/>} />
                <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage/>} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ACCOUNT} element={<AccountPage/>} />
                <Route path={ROUTES.ADMIN} element={<AdminPage/>} />
              </Routes>
          </BrowserRouter>  
      </React.StrictMode>
    );
  }
}

const App = withFirebase(AppComponent);

export default App;