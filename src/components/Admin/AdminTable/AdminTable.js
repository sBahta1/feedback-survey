import React, { Component } from 'react';
import AdminTableItem from './AdminTableItem/AdminTableItem';
import { connect } from 'react-redux';
class AdminTable extends Component {

    
    render() {
        return (
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
                    {this.props.reduxState.history.map((survey, i) => {
                        console.log(survey);
                        return (
                            <AdminTableItem delete={this.props.delete} key={i} survey={survey} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}//end class 
const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(AdminTable);