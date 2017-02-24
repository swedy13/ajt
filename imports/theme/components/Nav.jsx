import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import Accounts from '../../apps/accounts/Accounts.jsx';

injectTapEventPlugin();


export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.getStyle = this.getStyle();
        this.renderItems = this.renderItems();
    }

    getStyle() {
        let style = '';
        if (this.props.type === 'splash') {
            style = 'splash animation fast';
        }
        return style;
    }

    renderItems() {
        let menuItems = [
            {name: 'start',   slug: 'start-here', title: 'Start Here'},
            {name: 'blog',    slug: 'blog',       title: 'Read the Blog'},
            {name: 'courses', slug: 'courses',    title: 'Take a Course'},
            {name: 'enter',   slug: 'enter',      title: 'Login'}
        ];
        return menuItems;
    }

    render() {
        return (
            <div className={`menu ${this.props.type}`}>
                {this.renderItems.map((item, key) => {
                     return <div className={`item ${this.getStyle}`} key={key}>{item.title}</div>
                 })}
            </div>
        );
    }
}
