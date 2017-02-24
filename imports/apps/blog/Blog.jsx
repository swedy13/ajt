import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../../api/posts.js';

import Post from './Post.jsx';


class Blog extends Component {
    renderPosts() {
        return this.props.posts.map((post) => (
            <Post key={post._id} post={post}/>
        ));
    }

    render() {
        return (
            <div>
                <h1>Blog</h1>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


Blog.propTypes = {
    posts: PropTypes.array.isRequired,
};


export default createContainer(() => {
    return {
        posts: Posts.find({}, {sort: {createdAt: -1}}).fetch(),
    };
}, Blog);
