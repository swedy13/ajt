import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default GettingSilly = createContainer(({params}) => {
    const currentUser = Meteor.user();

    return currentUser;
}, Accounts);


class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    render() {
        let currentUser       = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn          = (currentUser && userDataAvailable);

        return (
            <div>
                {loggedIn ? 'Welcome ' + currentUser.username : ''}
            </div>
        )
    }
}

Accounts.PropTypes = {
    username: React.PropTypes.string,
}


class AccountsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
    }

    getMeteorData() {
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            // browserHistory.push('/login');
            console.log('will mount');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isAuthenticated) {
            // browserHistory.push('/login');
            console.log('did update');
        }
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout();
        // browserHistory.push('/login');
        console.log('log out');
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.logout}>Logout</a>
                {this.props.children}
            </div>
        );
    }
}



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                // browserHistory.push('/');
                console.log('logged in successfully!');
            }
        });
    }

    /*onSignUp(e){
     *    e.preventDefault();
     *    let name = document.getElementById("signup-name").value;
     *    let email = document.getElementById("signup-email").value;
     *    let password = document.getElementById("signup-password").value;
     *    this.setState({error: "test"});
     *    Accounts.createUser({email: email, username: name, password: password}, (err) => {
     *        if(err){
     *            this.setState({
     *                error: err.reason
     *            });
     *        } else {
     *            browserHistory.push('/login');
     *        }
     *    });
     *}*/

    render() {
        const error = this.state.error;

        return (
            <div>
                { error.length > 0 ? <div>{error}</div> : ''}
                <form onSubmit={this.handleSubmit}>
                    <input id="email" type="email" placeholder="email"/>
                    <input id="name" type="name" placeholder="name"/>
                    <input id="password" type="password" placeholder="password"/>
                    <input id="submit" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
