import React, {Component} from 'react';
import axios from 'axios';
class AdminTableItem extends Component{
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
    render(){
        return(
            <tr>
                <td>{this.props.survey.feeling}</td>
                <td>{this.props.survey.understanding}</td>
                <td>{this.props.survey.support}</td>
                <td>{this.props.survey.comments}</td>
                <td><button value={this.props.survey.id} onClick={this.props.delete}>Remove</button><button>Flag</button></td>
            </tr>
        )
    }
}
export default AdminTableItem; 