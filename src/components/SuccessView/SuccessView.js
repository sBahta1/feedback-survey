import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
class SuccessView extends Component {
componentDidMount(){
this.submitSurvey();
}
submitSurvey = () => {
    let completeSurvey = this.props.reduxState.feedback;
    console.log(completeSurvey);
    axios({
        method: 'POST',
        url: '/feedback',
        data: completeSurvey
    }).then((response) => {
        console.log(response);
        
    }).catch((error) => {
        console.log('error:', error);
    })
}

    handleNewSurvey = (event) => {
        this.props.dispatch({ type: 'CLEAR_FEEDBACK' });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Success!</h1>
                <h3>
                    Thank you for your feedback!
            </h3>
            <Button variant="contained" color="primary" onClick={this.handleNewSurvey}>Leave New Feedback</Button>
            </div>
        )
    }

}//end class
const mapReduxStateToProps = (reduxState)=>({
    reduxState
})
export default connect(mapReduxStateToProps)(SuccessView);