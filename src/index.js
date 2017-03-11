import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';


import 'bootstrap/less/bootstrap.less';
import App from './containers/App';




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
        <App store={store} history={history} />,
        document.getElementById('root')
        );



