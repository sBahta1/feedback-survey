import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
class Q2View extends Component {
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
            type: 'UNDERSTANDING',
            payload: parseInt(this.state.rating, 10)
        }
        this.props.dispatch(action);
        this.props.history.push('/3');
    }
    render() {
        return (
            <div>
                <p>Page 2 of 4</p>
                <div>
                    <h3>
                        How well are you understaing the content?
                    </h3><br />
                    <input onChange={this.handleInputChange} /><br />
                    <Button variant="contained" color="primary" onClick={this.handleNextQ}>Next</Button>
                </div>
            </div>
        )
    }
}//end class
export default connect()(Q2View);