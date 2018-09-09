import React, {Component} from 'react';
class AdminTableItem extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.survey.feeling}</td>
                <td>{this.props.survey.understanding}</td>
                <td>{this.props.survey.support}</td>
                <td>{this.props.survey.comments}</td>
                <td><button>Remove</button><button>Flag</button></td>
            </tr>
        )
    }
}
export default AdminTableItem; 