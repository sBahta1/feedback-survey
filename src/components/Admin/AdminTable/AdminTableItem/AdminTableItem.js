import React, { Component } from 'react';
import axios from 'axios';
class AdminTableItem extends Component {
    //   deleteBtn = (event)=>{
    //       console.log(event.target.value);
    //       axios({
    //           method:'DELETE',
    //           url:'/feedback/' + event.target.value
    //       }).then((response)=>{
    //           console.log(response);
    //           this.props.getFeedback();
    //       }).catch((error)=>{
    //             console.log('error', error);
    //       })
    //   }

    // flagFeedback = (event) => {
    //     console.log('click', event.target.value, event.target.id);
    //     let flag = event.target.value;
    //     let id = event.target.id;
    //     if (flag === false) {
    //         axios({
    //             method: 'PUT',
    //             url: '/feedback/' + id
    //         }).then((response) => {
    //             console.log(response);
    //             this.getFeedback
    //         }).catch((error) => {
    //             console.log('error', error);
    //         })
    //     }
    // }
    render() {
        return (
            <tr>
                <td>{this.props.survey.feeling}</td>
                <td>{this.props.survey.understanding}</td>
                <td>{this.props.survey.support}</td>
                <td>{this.props.survey.comments}</td>
                <td><button value={this.props.survey.id} onClick={this.props.delete}>Remove</button>
                    <button value={this.props.survey.flagged} id={this.props.survey.id} onClick={this.props.flag}>Flag</button></td>
            </tr>
        )
    }
}
export default AdminTableItem; 