import React, { Component } from 'react';
import { Link } from 'react-router';

import RichEditor from '../../theme/components/RichEditor.js';
/* import TextEditor from '../../theme/components/TextEditor.js';*/

export default class Editor extends Component {
    render() {
        return (
            <div>
                <h1>Editor</h1>
                <RichEditor/>
                <button>
                    <Link to="/blog">Blog</Link>
                </button>
                <button>
                    <Link to="/blog/post">Post</Link>
                </button>
            </div>
        )
    }
}
