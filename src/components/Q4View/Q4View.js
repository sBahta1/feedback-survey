import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Q4View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
        }
    }
    handleInputChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    }
    handleNextQ = (event) => {
        let action = {
            type: 'COMMENTS',
            payload: this.state.comments
        }
        this.props.dispatch(action);
        this.props.history.push('/5');
    }
    
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
export default connect()(Q4View);