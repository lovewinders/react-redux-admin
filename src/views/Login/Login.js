/**
 *@Author: hy-zhangb
 *Date: 2017-07-05 14:48
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-07-05 14:48
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: hiynn-admin
 *@Description:
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import * as authAction from 'src/redux/auth/authAction';
//antd
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.scss';
//antd
const FormItem = Form.Item;
//
class Login extends Component {
    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (!err) {

                const {actions} = this.props;
                actions.login({name: 'admin', type: '管理'});
            
            }
        
        });
    
    };
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <div className='login-form' >
                    <div className='login-logo'>
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }]
                            })(
                                <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='用户名' />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }]
                            })(
                                <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='密码' />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className='login-form-forgot' href='' style={{float: 'right'}}>忘记密码</a>
                            <Button type='primary' htmlType='submit' className='login-form-button' style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    
    }
}

const WrappedLoginForm = Form.create()(Login);

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(Object.assign({}, authAction), dispatch)
    };

};
export default connect(null, mapDispatchToProps)(WrappedLoginForm);