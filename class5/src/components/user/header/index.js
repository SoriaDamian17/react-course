import React from 'react';
import { connect } from 'react-redux';
import { UserHeaderLess } from './UserHeader';

class UserHeader extends React.Component {

    render() {
        if (!this.props.users) {
            return <div>Loading...</div>
        }

        return <div><UserHeaderLess  user={this.props.users}/></div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { users: state.users.find(user => 
        user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);