import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Q4View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }
    handleInputChange = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }
    handleNextQ = (event) => {
        let action = {
            type: 'COMMENTS',
            payload: this.state.comment
        }
        this.props.dispatch(action);
        console.log(this.props.reduxState.feedback);
        
        this.submitSurvey();
    }
    submitSurvey = () => {
        let completeSurvey = this.props.reduxState.feedback;
        axios({
            method: 'POST',
            url: '/feedback',
            data: completeSurvey
        }).then((response) => {
            console.log(response);
            this.props.history.push('/5');
        }).catch((error) => {
            console.log('error:', error);
        })
    }//end submitSurvey
    render() {
        return (
            <div>
                <p>Page 4 of 4</p>
                <div>
                    <h3>
                        Please leave any comments you might have.
                </h3><br />
                    <input onChange={this.handleInputChange} /><br />
                    <button onClick={this.handleNextQ}>Submit</button>

                </div>
            </div>
        )
    }
}//end class
const mapReduxStateToProps = (reduxState)=>({
    reduxState
})
export default connect(mapReduxStateToProps)(Q4View);