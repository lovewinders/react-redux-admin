/*
 * @Author: zhangyujie
 * @Date:   2017-05-16 13:51:34
 * @Last Modified by:   zhangyujie
 * @Last Modified time: 2017-05-16 13:59:16
 * @Email: zhangyujie3344521@163.com
 * @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/src/views/App/index.js
 * @File Name: index.js
 * @Descript:
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//
class App extends Component {
    constructor(props, context) {

        super(props, context);

    }
    render() {

        return (
            <div className = 'App'>
                {this.props.children}
            </div>
        );

    }
}


function mapStateToProps(state = {},ownProps) {

    return Object.assign({},ownProps);

}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators({}, dispatch)
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(App);