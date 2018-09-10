import React, { Component } from 'react';
import AdminTable from './AdminTable/AdminTable';
import Axios from 'axios';
import { connect } from 'react-redux';
class Admin extends Component {
    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        Axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            const feedbackHistory = response.data;
            const action = { type: 'GET_HISTORY', payload: feedbackHistory };
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error getting feedback history:', error);
        })
    }
    deleteBtn = (event) => {
        console.log(event.target.value);
        Axios({
            method: 'DELETE',
            url: '/feedback/' + event.target.value
        }).then((response) => {
            console.log(response);
            this.getFeedback();
        }).catch((error) => {
            console.log('error', error);
        })
    }
    flagFeedback = (event) => {
        console.log('click', event.target.value, event.target.id);
        //let flag = event.target.value;
        //let id = event.target.id;
        // if (event.target.value == false) {
        Axios({
            method: 'PUT',
            url: '/feedback/' + event.target.id
        }).then((response) => {
            console.log(response);
            this.getFeedback()
        }).catch((error) => {
            console.log('error', error);
            alert('Error flagging feedback', error);
        })
        // }
    }
    render() {
        return (
            <AdminTable flag={this.flagFeedback} delete={this.deleteBtn} />
        )
    }
}//end class 

const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(Admin);