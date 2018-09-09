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
            this.props.distpatch(action);
        }).catch((error) => {
            console.log('Error getting feedback history:', error);
        })
    }

    render() {
        return (
            <AdminTable />
        )
    }
}//end class 

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(Admin);