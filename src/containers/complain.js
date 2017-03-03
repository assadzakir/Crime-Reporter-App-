/**
 * Created by Anonmous on 2/28/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authActions,signOut,fetchDonorsFromServer,complainDetailAction } from '../store/actions/app-action';
import * as MUI from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import { browserHistory } from 'react-router';



 class Complain extends Component {

     handleDrawerToggle = (u) => {
         this.props.complainDetail(u);
         browserHistory.push('/complain/'+u.uid);
     };

     showUsersList(users) {
         if(!users) {
             return [];
         }
         console.log(users);
         return Object.keys(users).reduce(
             (list, uid) => {
                 return [
                     ...list,
                     {
                         uid,
                         ...users[uid]
                     }
                 ];
             }, []);

     }

    render() {
        return (
            <MUI.List >
                <MUI.Subheader style={styles.subHeader} inset={false}>Complain List</MUI.Subheader>
                {
                    this.props.complain.isloaded ? this.showUsersList(this.props.complain.ComplainList).map((user,id) =>


                        <div style={styles.donerListContainer} key={id}>

                                <MUI.ListItem
                                    leftAvatar={<MUI.Avatar icon={<Person />} />}
                                    rightIcon={<ActionInfo />}
                                    primaryText={user.name}
                                    secondaryText={user.title}
                                    onTouchTap={this.handleDrawerToggle.bind(this,user)}
                                />
                                <MUI.Divider />


                        </div>
                        ) : ''
                }

            </MUI.List>
        );
    }
}

const mapStateToProps = (state) => {
    return { complain: state.complainReducer };
};

const mapDispatchToProps = (d) =>{
    return {complainDetail:(detail)=>d(complainDetailAction(detail))}
}
export default connect(mapStateToProps,mapDispatchToProps)(Complain);

const styles = {
    donerListContainer: {
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