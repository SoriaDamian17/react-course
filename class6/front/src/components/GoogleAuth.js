import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const gapiSDK = window.gapi;

class GoogleAuth extends React.Component {

    componentDidMount() {
        gapiSDK.load('client:auth2', () => {
            gapiSDK.client.init({
                clientId: '157677376651-pi786506fb4op74o62905kquo660vcij.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = gapiSDK.auth2.getAuthInstance();
                this.onAuthChangue(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChangue);
            });
        });
    }

    onAuthChangue = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) return null;
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sing Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red button google">
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }

}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);