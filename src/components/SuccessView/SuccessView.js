import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuccessView extends Component {

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
                <button onClick={this.handleNewSurvey}>Leave New Feedback</button>
            </div>
        )
    }

}//end class

export default connect()(SuccessView);