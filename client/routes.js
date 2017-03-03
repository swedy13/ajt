import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Hero   from './theme/components/Hero';

import Login  from './apps/Login';

import Start  from './apps/Start';

import Blog   from './apps/blog/Blog';
import Post   from './apps/blog/Post';

import Editor from './apps/editor/Editor';
import Course from './apps/Course';


const routes = (
    <Router history={browserHistory}>
        <Route path="/"          component={Hero}></Route>
        <Route path="/start"     component={Start}></Route>

        <Route path="/blog"      component={Blog}></Route>
        <Route path="/blog/post" component={Post}></Route>
        <Route path="/editor"    component={Editor}></Route>

        <Route path="/course"    component={Course}></Route>

        <Route path="/login"     component={Login}></Route>
    </Router>
)


export default routes;
