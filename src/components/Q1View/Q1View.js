import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Q1View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        }//end state
    }//end constructor

    handleInputChange = (event) => {
        this.setState({
            rating: event.target.value,
        });
    }
    handleNextQ = (event) => {
        let action = {
            type: 'FEELING',
            payload: parseInt(this.state.rating)
        }
        this.props.dispatch(action);
        this.props.history.push('/2');
    }

    render() {
        return (
            <div>
                <p>Page 1 of 4</p>
                <div>
                    <h3>
                        How are you feeling today?
                    </h3><br />
                    <input onChange={this.handleInputChange} /><br />
                    <Button variant="contained" color="primary"  onClick={this.handleNextQ}>Next</Button>
                </div>
            </div>
        )
    }//end render
}//end class

export default connect()(Q1View);