import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import Blog from './components/Blog';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/blog" component={Blog}></Route>
    </Router>
)


export default routes;
