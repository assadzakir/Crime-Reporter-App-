/**
 * Created by Anonmous on 3/2/2017.
 */
import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { connect } from 'react-redux'
import Person from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
const buttonStyle = { width: '100%' , float:'right'};



class complainDetail extends Component {
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

       var complainDetails = this.props.complain.complainDetails;
        console.log(complainDetails);

        return (
            <div style={styles.complainDetailsContainer}>
                <MUI.Card>
                    <MUI.CardHeader
                        title={complainDetails.name}
                        subtitle={complainDetails.title}
                        avatar={<MUI.Avatar icon={<Person />}/>}
                    />
                    <MUI.CardText >
                        <div> Description : {complainDetails.des}</div>
                        <div> Details :{complainDetails.details}</div>
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
        complain: state.complainDetailsReducer };
};

export default connect(mapStateToProps)(complainDetail);



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