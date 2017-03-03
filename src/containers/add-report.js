/**
 * Created by Anonmous on 3/3/2017.
 */
/**
 * Created by Anonmous on 3/3/2017.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import style from './signin.scss';
const buttonStyle = { width: '100%' };
const fieldStyle = { width: '80%' };
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux'
import firebase,{ firebaseAuth, firebaseDb} from '../config/firebase';
import store from '../store'




class addReport extends Component {



    render() {


        const styles = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
        };

        function handleActive(tab) {
            alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
        }

        const handleCrimeSubmit = (e) => {
            e.preventDefault();
            if(this.props.auth.user == undefined){
                alert('make sure you are login')
                return
            }
            this.state.uid = this.props.auth.user.uid
            var data = this.state;
            firebase.database().ref().child('crime/').push(
                data
            ).then(function () {
                store.dispatch({
                    type:"FETCHING_DATA"
                });
                alert('crime added successfully')
            })
        };
        const handleMissingSubmit = (e) => {
            e.preventDefault();
            if(this.props.auth.user == undefined){
                alert('make sure you are login')
                return
            }
            this.state.uid = this.props.auth.user.uid;
            var data = this.state;
            firebase.database().ref().child('missing/').push(
                data
            ).then(function (){
            store.dispatch({
                type:"FETCHING_DATA"
            });
                alert('missing added successfully')
            })

        };
        const handleComplainSubmit = (e) => {
            e.preventDefault();
            if(this.props.auth.user == undefined){
                alert('make sure you are login')
                return
            }
            this.state.uid = this.props.auth.user.uid;
            var data = this.state;
            firebase.database().ref().child('complain/').push(
                data
            ).then(function () {
                store.dispatch({
                    type:"FETCHING_DATA"
                });
                alert('complain added successfully')
            })

        };

        return (
            <Tabs>
                <Tab label="Register crime" >
                    <div>
                        <div className='Login' style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
                            <Paper className='Login-Panel'>
                                <form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={handleCrimeSubmit.bind(this)}>
                                    <TextField
                                        floatingLabelText='Name'
                                        name="name"
                                        onChange={({target}) => {
                                            this.setState({ name: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Title'
                                        name='title'
                                        type='title'
                                        onChange={({target}) => {
                                            this.setState({ title: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Description'
                                        name='des'
                                        type='des'
                                        onChange={({target}) => {
                                            this.setState({ des: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Detail'
                                        name='details'
                                        type='details'
                                        onChange={({target}) => {
                                            this.setState({ details: target.value })
                                        }}
                                        style={fieldStyle}
                                    />

                                    <div className='LoginForm-Submit'>
                                        <RaisedButton
                                            label='Submit Crime'
                                            primary
                                            type='submit'
                                            style={buttonStyle}
                                        />
                                    </div>
                                </form>
                            </Paper>

                        </div>
                    </div>
                </Tab>
                <Tab label="Register Missing Person" >
                    <div>
                        <div className='Login' style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
                            <Paper className='Login-Panel'>
                                <form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={handleMissingSubmit}>
                                    <TextField
                                        floatingLabelText='Name'
                                        name="name"
                                        onChange={({target}) => {
                                            this.setState({ name: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Description'
                                        name='des'
                                        type='des'
                                        onChange={({target}) => {
                                            this.setState({ des: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Detail'
                                        name='details'
                                        type='details'
                                        onChange={({target}) => {
                                            this.setState({ details: target.value })
                                        }}
                                        style={fieldStyle}
                                    />

                                    <div className='LoginForm-Submit'>
                                        <RaisedButton
                                            label='Submit Missing person'
                                            primary
                                            type='submit'
                                            style={buttonStyle}
                                        />
                                    </div>
                                </form>
                            </Paper>

                        </div>
                    </div>
                </Tab>
                <Tab label="Register Complain" >
                    <div>
                        <div className='Login' style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
                            <Paper className='Login-Panel'>
                                <form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={handleComplainSubmit}>
                                    <TextField
                                        floatingLabelText='Name'
                                        name="name"
                                        onChange={({target}) => {
                                            this.setState({ name: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Title'
                                        name='title'
                                        type='title'
                                        onChange={({target}) => {
                                            this.setState({ title: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Description'
                                        name='des'
                                        type='des'
                                        onChange={({target}) => {
                                            this.setState({ des: target.value })
                                        }}
                                        style={fieldStyle}
                                    />
                                    <TextField
                                        floatingLabelText='Detail'
                                        name='details'
                                        type='details'
                                        onChange={({target}) => {
                                            this.setState({ details: target.value })
                                        }}
                                        style={fieldStyle}
                                    />

                                    <div className='LoginForm-Submit'>
                                        <RaisedButton
                                            label='Submit Complain'
                                            primary
                                            type='submit'
                                            style={buttonStyle}
                                        />
                                    </div>
                                </form>
                            </Paper>

                        </div>
                    </div>
                </Tab>
            </Tabs>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}



export default connect(mapStateToProps)(addReport);