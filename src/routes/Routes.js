import React from 'react';
import {IndexRoute, Route} from 'react-router';


import App from '../components/App';
import Repos from '../components/Repos';
import About from '../components/About';
import Home from '../bt-ex-components/HomePage';
import ComponentsPage from '../my-bt-ex/ComponentsPage';

export default (
        <Route path="/" component={App}>
            <Route path="/repos" component={Home}/>
            <Route path="/about" component={ComponentsPage}/>
        </Route>
        );
