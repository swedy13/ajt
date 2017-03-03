import React, { Component } from 'react';

import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

/* import { Posts } from '../../api/posts.js';*/

import styles from '../styles/text-editor.styl';


export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onBold = this.onBold.bind(this)
        this.onPublish = this.onPublish.bind(this);
    }

    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    onBold() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onPublish(e) {
        e.preventDefault();
        const title = $('.texteditor .title input').val();
        const content = this.state.editorState.getCurrentContent().getPlainText();

        console.log(title, content);

        Posts._collection.insert({
            title,
            content,
            createdAt: new Date(),
        });
    }

    render() {
        const {editorState} = this.state;
        return (
            <div className="texteditor">
                <TextField
                    className ="title"
                    floatingLabelText="Title"
                    fullWidth={true}
                />
                <div className="editor">
                    <button onClick={this.onBold}>Bold</button>
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </div>
                <RaisedButton
                    className="publish"
                    onClick={this.onPublish}
                    label="Publish"
                    primary={true}
                />
            </div>
        );
    }
}
