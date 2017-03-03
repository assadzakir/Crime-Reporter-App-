/**
 * Created by Anonmous on 3/3/2017.
 */
/**
 * Created by Anonmous on 3/2/2017.
 */
import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { connect } from 'react-redux'
import Person from 'material-ui/svg-icons/social/person';



class crimeDetail extends Component {
    //user-default
    render() {

        var crimeDetails = this.props.crime.crimeDetails;

        return (
            <div style={styles.complainDetailsContainer}>
                <MUI.Card>
                    <MUI.CardHeader
                        title={crimeDetails.title}
                        subtitle={crimeDetails.title}
                        avatar={<MUI.Avatar icon={<Person />}/>}
                    />
                    <MUI.CardText >
                        <div> Description : {crimeDetails.des}</div>
                        <div> Details :{crimeDetails.details}</div>
                    </MUI.CardText>
                </MUI.Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { crime: state.crimeDetailsReducer };
};

export default connect(mapStateToProps)(crimeDetail);



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