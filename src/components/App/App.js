import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
//import { HashRouter as Router, Route } from "react-router-dom";
import Q1View from '../Q1View/Q1View'
import Q2View from '../Q2View/Q2View'
import Q3View from '../Q3View/Q3View'
import Q4View from '../Q4View/Q4View'
import SuccessView from '../SuccessView/SuccessView'
import Admin from '../Admin/Admin'
import { HashRouter as Router, Route } from "react-router-dom";
class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          {/* CLient-side Routers */}
          <Route exact path="/" component={Q1View} />
          <Route path="/2" component={Q2View} />
          <Route path="/3" component={Q3View} />
          <Route path="/4" component={Q4View} />
          <Route path="/5" component={SuccessView} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
