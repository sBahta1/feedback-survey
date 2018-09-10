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
    deleteBtn = (event)=>{
        console.log(event.target.value);
        Axios({
            method:'DELETE',
            url:'/feedback/' + event.target.value
        }).then((response)=>{
            console.log(response);
            this.getFeedback();
        }).catch((error)=>{
              console.log('error', error);
        })
    }
    render() {
        return (
            <AdminTable  delete={this.deleteBtn}/>
        )
    }
}//end class 

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(Admin);