import React, { Component, PropTypes, dangerouslySetInnerHTML } from 'react';
import { Link } from 'react-router';

import { ContentState, EditorState, convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

/* import { Posts } from '../../api/posts.js';*/


export default class Post extends Component {
    /* renderContent() {
     *     const content = convertFromRaw(this.props.post.content);
     *     return {__html: stateToHTML(content)};
     * }*/

    /* deletePost() {
     *     Posts._collection.remove(this.props.post._id);
     * }*/

    /* render() {
     *     return (
     *         <li>
     *             <span>
     *                 <h3>{this.props.post.title}</h3>
     *                 <button onClick={this.deletePost.bind(this)}>&times;</button>
     *             </span>
     *             <div dangerouslySetInnerHTML={this.renderContent()}></div>
     *         </li>
     *     );
     * }*/
    render() {
        return (
            <div>
                <h3>Posts</h3>
                <button>
                    <Link to="/blog">Blog</Link>
                </button>
                <button>
                    <Link to="/editor">Editor</Link>
                </button>
            </div>)
    }
}


/* Post.propTypes = {
 *     post: PropTypes.object.isRequired,
 * };*/
