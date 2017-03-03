/**
 * Created by Anonmous on 2/27/2017.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import firebase from 'firebase';
import { authActions,signOut } from '../../store/actions/app-action';
import { browserHistory } from 'react-router';
// redux/firebase
import { connect } from 'react-redux'
// ...

// Components
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
const buttonStyle = { color: 'white' };

class Navbar extends Component {

    static propTypes = {
        auth: PropTypes.object,
        signOut: PropTypes.func
    };

    state = {
        open: false
    };

    handleLogin = (loginData) => {
        console.log(this.props);
        this.props.signOut();
        browserHistory.push('/')
    };

    render() {
        const {auth} = this.props;
        const mainMenu = (
            <div className='Navbar-Main-Menu'>
        <FlatButton
    label='Crime'
    style={buttonStyle}
    onClick={() => browserHistory.push('/crime')}
/>
        <FlatButton
    label='Missing'
    style={buttonStyle}
    onClick={() => browserHistory.push('/missing-person')}
/>
        <FlatButton
    label='Sign Up'
    style={buttonStyle}
    onClick={() => browserHistory.push('/signup')}
/>
                <FlatButton
                    label='Login'
                    style={buttonStyle}
                    onClick={() => browserHistory.push('/signin')}
                />
            </div>
        )

        const rightMenu = auth.auth.user ? (
                <div className='Navbar-Main-Menu'>
                    <FlatButton
                        label='Complaint'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/complains')}
                    />
                    <FlatButton
                        label='Crime'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/crime')}
                    />
                    <FlatButton
                        label='Missing'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/missing-person')}
                    />
                    <FlatButton
                        label='File Report'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/add-reports')}
                    />
            <FlatButton
                label='LogOut'
                style={buttonStyle}
                onClick={this.handleLogin}
            />
            </div>
        ) : mainMenu;


        const adminMenu = auth.auth.user ? (
                <div className='Navbar-Main-Menu'>
                    <FlatButton
                        label='ALL Complaint'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/complains')}
                    />
                    <FlatButton
                        label='Crime'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/crime')}
                    />
                    <FlatButton
                        label='Missing'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/missing-person')}
                    />
                    <FlatButton
                        label='File Report'
                        style={buttonStyle}
                        onClick={() => browserHistory.push('/add-reports')}
                    />
                    <FlatButton
                        label='LogOut'
                        style={buttonStyle}
                        onClick={this.handleLogin}
                    />
                </div>
            ) : mainMenu;


        /* return (
         <AppBar
         title={
         <Link to='/' style={buttonStyle}>
         iq
         </Link>
         }
         className='Navbar'
         iconElementRight={mainMenu}
         />
         )*/

        return (
            <div>

                <AppBar title="crime-reporter-app" className='Navbar' showMenuIconButton={false} iconElementRight={auth.auth.user && auth.auth.user.role == 'admin' ? adminMenu:rightMenu} />

            </div>
        )

    }
}
//=====================================
//  CONNECT
//-------------------------------------


const mapStateToProps = (state) => {
    return { auth: state };
}

const mapDispatchToProps = (dispatch) => {
    return { signOut: () => dispatch(signOut())  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);