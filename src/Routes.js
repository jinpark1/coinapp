import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import AccountsPage from './Pages/AccountsPage';

export default(
  <Switch>
  	<Route exact path='/' component={ SignInPage } />
    <Route exact path='/accounts/:id' component={ AccountsPage } />
	</Switch>
)