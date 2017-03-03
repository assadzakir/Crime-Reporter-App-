/**
 * Created by Anonmous on 3/3/2017.
 */
import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { connect } from 'react-redux'
import Person from 'material-ui/svg-icons/social/person';
const buttonStyle = { width: '100%' , float:'right'};
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class missingDetail extends Component {
    //user-default
    render() {

        const AdminMenu = this.props.auth.user && this.props.auth.user.role == 'admin' ? (
                <div className='Navbar-Main-Menu'>
                    <FlatButton
                        label='Process'
                        style={buttonStyle}
                    />
                    <FlatButton
                        label='Pending'
                        style={buttonStyle}
                    />
                </div>):'';

        var missingDetails = this.props.missing.missingDetails;

        return (
            <div style={styles.complainDetailsContainer}>
                <MUI.Card>
                    <MUI.CardHeader
                        title={missingDetails.name}
                        avatar={<MUI.Avatar icon={<Person />}/>}
                    />
                    <MUI.CardText >
                        <div> Description : {missingDetails.des}</div>
                        <div> Details :{missingDetails.details}</div>
                    </MUI.CardText>
                    <span>{AdminMenu}</span>
                </MUI.Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        missing: state.missingPersonDetailsReducer };
};

export default connect(mapStateToProps)(missingDetail);



const styles = {
    complainDetailsContainer: {
        //marginLeft: 150,
        //marginRight: 150,
        border: 'solid 1px #d9d9d9',
    },
    clear: {
        clear: 'both'
    },

    container: {
        border: 'solid 1px #d9d9d9',

        overflow: 'hidden'
    },

    bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        width: 360
    },
    subHeader :{
        fontWeight:"Bold"
    }
};