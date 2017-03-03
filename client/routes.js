import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home   from './components/Home';
import Start  from './components/Start';
import Blog   from './components/Blog';
import Course from './components/Course';
import Login  from './components/Login';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/start" component={Start}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/course" component={Course}></Route>
        <Route path="/login" component={Login}></Route>
    </Router>
)


export default routes;
