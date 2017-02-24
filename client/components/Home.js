import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        };

        this.getHero   = this.getHero();
        this.getTitle  = this.getTitle();
    }

    getHero() {
        let images = ['desert', 'forest', 'jungle', 'mountain', 'ocean', 'tundra'];
        let randomize = Math.floor(Math.random() * images.length);
        return images[randomize];
    }

    getTitle() {
        return (
            <div className="header">
                <h1 className='title'>A Journey's Tale</h1>
                <h3 className='subtitle'>What's Your Next Adventure?</h3>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ animate: true });
    }

    render() {
        var title;
        if (this.state.animate) {
            title = this.getTitle;
        }

        return (
            <CSSTransitionGroup
                component="div"
                className={"hero " + this.getHero}
                transitionName="slide-up"
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={300}>
                <div className="mask"></div>
                {title}
            </CSSTransitionGroup>
        );
    }
}
