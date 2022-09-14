import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import * as ROUTES from './constants/routes'
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navigation />
        <hr />
      </div>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();