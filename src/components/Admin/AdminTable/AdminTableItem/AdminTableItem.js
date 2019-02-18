import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class AdminTableItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.survey.feeling}</td>
                <td>{this.props.survey.understanding}</td>
                <td>{this.props.survey.support}</td>
                <td>{this.props.survey.comments}</td>
                <td>{this.props.survey.id}</td>
                <td>
                    <Button
                        variant="contained"
                        color="secondary"
                        value={this.props.survey.id}
                        onClick={this.props.delete}
                    >
                        Remove
                    </Button>
                    <Button
                        value={this.props.survey.flagged}
                        id={this.props.survey.id}
                        onClick={this.props.flag}
                    >
                        Flag
                    </Button>
                </td>
            </tr>
        )
    }
}
export default AdminTableItem; 