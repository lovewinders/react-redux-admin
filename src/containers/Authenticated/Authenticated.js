/*
* @Author: zhangyujie
* @Date:   2017-05-16 16:28:40
* @Last Modified by:   zhangyujie
* @Last Modified time: 2017-05-16 17:02:43
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/src/containers/Authenticated/Authenticated.js
* @File Name: Authenticated.js
* @Descript: 负责主页中的权限验证
*/

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {
        componentWillMount () {

            this.authorityFilter(this.props);

        }

        componentWillReceiveProps (nextProps) {

            this.authorityFilter(nextProps);
        
        }
        authorityFilter(props) {


            let {user = false,code} = props;
            const pathname = props.pathname;

            console.log('authorityFilter', pathname);

            if(!user && pathname != '/login') {

                localStorage.setItem('nextPathname',pathname);
                let token  =  localStorage.getItem('token');
                
                //本地没有token，尝试从url获取
                if(!token ) {

                    token = props.token; 
                   
                }

                // 不是登录页面，自动登录
                if(token &&  code != -1 ) {
                    
                    try{

                        user = jwtDecode(token);
                        const ct = new Date().getTime() / 1000;
                       
                        if(user.exp < ct) {

                            this.gotoLoginPage();

                        }else{

                            localStorage.setItem('token', token);

                            this.props.dispatch({type: 'LOGIN',auth: {token,user}}); 
                        
                        }

                    }catch(error) {

                        user = null ;
                    
                    }

                }

                if(!user) {

                    this.gotoLoginPage();
                
                }

            }

        }

        gotoLoginPage() {

            localStorage.removeItem('token');
            this.props.dispatch(push('/login'));
        
        }
        render () {

            return (
                <div>
                    {this.props.user ? <Component {...this.props}/> : null}
                </div>
            );
        
        }
    }

    const mapStateToProps = (state) => ({
        user: state.auth,
        code: state.auth,
        token: state.routing.locationBeforeTransitions.query.token,
        pathname: state.routing.locationBeforeTransitions.pathname
    });


    return connect(mapStateToProps)(AuthenticatedComponent);

}
