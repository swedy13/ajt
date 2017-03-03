import React, { Component } from 'react';

import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { NavList } from './Nav';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        };
    }

    renderHero() {
        let hero = [
            {image: 'desert',   theme: 'light'},
            {image: 'forest',   theme: 'dark'},
            {image: 'jungle',   theme: 'dark'},
            {image: 'mountain', theme: 'light mountain'},
            {image: 'ocean',    theme: 'dark'},
            {image: 'tundra',   theme: 'light'}
        ];
        let randomize = Math.floor(Math.random() * hero.length);
        return hero[randomize];
    }

    renderTitle() {
        return (
            <div>
                <h1 className='title'>A Journey's Tale</h1>
                <h3 className='subtitle'>What's Your Next Adventure?</h3>
            </div>
        )
    }

    renderNav() {
        return NavList.map(item => (
            <div className="item" key={item}>
                <Link to={"/" + {item}}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
            </div>
        ));
    }

    componentDidMount() {
        this.setState({ animate: true });
    }

    render() {
        const hero = this.renderHero();

        let title;
        if (this.state.animate) {
            title = this.renderTitle();
        }

        let nav;
        if (this.state.animate) {
            nav = NavList.map(item => (
                <Link className="item" key={item} to={`/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
            ));
        }

        return (
            <div className={"hero " + hero.image}>
                <div className="mask"></div>
                <CSSTransitionGroup
                    component="div"
                    className="title-group"
                    transitionName="slide-up"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={300}>
                    {title}
                </CSSTransitionGroup>
                <CSSTransitionGroup
                    component="nav"
                    className={"menu " + hero.theme}
                    transitionName="slide-up"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={300}>
                    {nav}
                </CSSTransitionGroup>
            </div>
        );
    }
}
