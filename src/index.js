/*
 * @Author: zhangyujie
 * @Date:   2017-05-16 10:27:16
 * @Last Modified by:   zhangyujie
 * @Last Modified time: 2017-05-16 15:52:18
 * @Email: zhangyujie3344521@163.com
 * @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/src/index.js
 * @File Name: index.js
 * @Descript:
 */
//css
import 'src/reset.css';
import 'src/index.scss';
import 'antd/dist/antd.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import storeFactory from './utils/store';
import routes from './routes';

const initState = {

};

const store = storeFactory.getInstantiate(initState,browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store} >
        <Router history={history} routes={routes} />
    </Provider>,
    document.querySelector('.container')
);