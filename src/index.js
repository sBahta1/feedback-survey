import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const emptySurvey = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
}

const history = (state = [], action) => {
    if (action.type === 'GET_HISTORY') {
        const feedbackHistoryFromServer = action.payload;
        return feedbackHistoryFromServer;
    }
    return state;
};

const feedback = (state = emptySurvey, action) => {
    if (action.type === 'FEELING') {
        return { ...state, feeling: action.payload };
    } else if (action.type === 'UNDERSTANDING') {
        return { ...state, understanding: action.payload };
    } else if (action.type === 'SUPPORT') {
        return { ...state, support: action.payload };
    } else if (action.type === 'COMMENTS') {
        return { ...state, comments: action.payload };
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return emptySurvey;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
        history
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

