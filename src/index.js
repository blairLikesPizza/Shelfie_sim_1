import React from 'react';
import ReactDOM from 'react-dom';
// 42D
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>

        <App />

    </Router>,
    document.getElementById('root')
);
registerServiceWorker();