import React, { Component } from 'react';


export default class Theme extends Component {
    constructor(props) {
        super(props);

        this.randomImage = this.randomImage();
    }

    randomImage() {
        var images = ['desert', 'forest', 'jungle', 'mountain', 'ocean', 'tundra'];
        var randomize = Math.floor(Math.random() * 6);
        return images[randomize];
    }

    render() {
        return (
            <div className={"hero " + this.randomImage}>
                <div className="mask"></div>
                <div className="hide header animation slide-up slow">
                    <h1 className="title">A Journey's Tale</h1>
                    <h3 className="subtitle">What's Your Next Adventure</h3>
                </div>
            </div>
        );
    }
}
