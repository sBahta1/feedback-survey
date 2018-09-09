import React, {Component } from 'react';
import Axios from 'axios';

class AdminTable extends Component{

    componentDidMount(){
        this.getFeedback();
    }
getFeedback = ()=>{
Axios({
    method:'GET',
    url:'/feedback'
}).then((response)=>{
    const feedbackHistory = response.data;
    const action = {type:'GET_HISTORY', payload: feedbackHistory};
    this.props.distpatch(action);
}).catch ((error)=>{
    console.log('Error getting feedback history:', error);
})
}
    render(){
    return(
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Remove/Flag</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}
}//end class 