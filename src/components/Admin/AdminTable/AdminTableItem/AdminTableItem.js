import React, {Component} from 'react';
class AdminTableItem extends Component{
  deleteBtn = (event)=>{
      console.log(event.target.value);
      
  }
    render(){
        return(
            <tr>
                <td>{this.props.survey.feeling}</td>
                <td>{this.props.survey.understanding}</td>
                <td>{this.props.survey.support}</td>
                <td>{this.props.survey.comments}</td>
                <td><button value={this.props.survey.id} onClick={this.deleteBtn}>Remove</button><button>Flag</button></td>
            </tr>
        )
    }
}
export default AdminTableItem; 