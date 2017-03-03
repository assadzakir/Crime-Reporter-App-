/**
 * Created by Anonmous on 3/3/2017.
 */
/**
 * Created by Anonmous on 2/28/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authActions,signOut,missingPersonDetailAction } from '../store/actions/app-action';
import * as MUI from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import { browserHistory } from 'react-router';



class Missing extends Component {

    handleDrawerToggle = (u) => {
        this.props.missingDetail(u);
        browserHistory.push('/missing/'+u.uid);
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
                <MUI.Subheader style={styles.subHeader} inset={false}>Missing List</MUI.Subheader>
                {
                    this.props.missing.isloaded ? this.showUsersList(this.props.missing.MissingList).map((user,id) =>


                            <div style={styles.donerListContainer} key={id}>

                                <MUI.ListItem
                                    leftAvatar={<MUI.Avatar icon={<Person />} />}
                                    rightIcon={<ActionInfo />}
                                    primaryText={user.name}
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
    return { missing: state.missingReducer };
};

const mapDispatchToProps = (d) =>{
    return {missingDetail:(detail)=>d(missingPersonDetailAction(detail))}
}
export default connect(mapStateToProps,mapDispatchToProps)(Missing);

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