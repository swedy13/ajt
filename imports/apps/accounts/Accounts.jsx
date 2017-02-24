import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import TextField from 'material-ui/TextField';


class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            open: false,
        };
    }

    handleTouchTap = (e) => {
        e.preventDefault();

        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    register(e) {
        e.preventDefault();
        let email    = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        Accounts.createUser({email: email, password: password}, (err) => {
            if (err) {
                this.setState({error: err.reason});
            }
            else {
                // browserHistory.push('login');
                console.log('registered');
            }
        });
    }

    login(e) {
        e.preventDefault();
        let email    = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({error: err.reason});
            }
            else {
                // browserHistory.push('/');
                console.log('logged in');
            }
        });
    }

    render() {
        const error = this.state.error;

        return (
            <div>
                { error.length > 0 ? <div>{error}</div> : ''}

                <RaisedButton onTouchTap={this.handleTouchTap} label="Login"/>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrgin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <TextField
                        id="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        type="email"
                    /><br />
                    <TextField
                        id="password"
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                    <RaisedButton onTouchTap={this.register.bind(this)} label="Register"/>
                    <RaisedButton onTouchTap={this.login.bind(this)} label="Login"/>
                </Popover>
            </div>
        );
    }
}


export default Accounts;
