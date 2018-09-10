import React, { Component } from 'react';
import { connect } from 'react-redux';

class Q3View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        }
    }//end constructor
    handleInputChange = (event) => {
        this.setState({
            rating: event.target.value,
        });
    }//end inputchange
    handleNextQ = (event) => {
        let action = {
            type: 'SUPPORT',
            payload: parseInt(this.state.rating)
        }
        this.props.dispatch(action);
        this.props.history.push('/4');
    }//end NextQ
    render() {
        return (
            <div>
                <p>Page 3 of 4</p>
                <div>
                    <h3>
                        How well are you being supported?
                    </h3><br />
                    <input onChange={this.handleInputChange} /><br />
                    <button onClick={this.handleNextQ}>Next</button>
                </div>
            </div>
        )
    }

}//end class
export default connect()(Q3View);