import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/* import { Posts } from '../../api/posts.js';*/

import Post from './Post';


export default class Blog extends Component {
    renderPosts() {
        return <Post/>
        /* return this.props.posts.map((post) => (
         *     <Post key={post._id} post={post}/>
         * ));*/
    }

    render() {
        return (
            <div>
                <h1>Blog</h1>
                <ul>
                    {this.renderPosts()}
                </ul>
                <button>
                    <Link to="/blog/post">Post</Link>
                </button>
                <button>
                    <Link to="/editor">Editor</Link>
                </button>
            </div>
        );
    }
}


/* Blog.propTypes = {
 *     posts: PropTypes.array.isRequired,
 * };*/


/* export default createContainer(() => {
 *     return {
 *         posts: Posts.find({}, {sort: {createdAt: -1}}).fetch(),
 *     };
 * }, Blog);*/
