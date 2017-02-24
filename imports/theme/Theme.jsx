import React, { Component } from 'react';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import RichEditor from '../apps/editor/RichEditor.jsx';
import Blog from '../apps/blog/Blog.jsx';


export default class Theme extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Nav type="splash"/>
            </div>
        );
    }
}
