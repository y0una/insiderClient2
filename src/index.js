import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app';
import CompanyShow from './scripts/components/CompanyShow';
import SearchPage from './scripts/components/SearchPage'
import './css/index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/companies/:companyName" component={CompanyShow}/>
      <Route path="/search/:searchTerm" component={SearchPage}/>
    </Router>
  ), document.getElementById('root'))

