import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Layout, Menu, Badge, Icon } from 'antd';
//component
//js
import 'whatwg-fetch';
//css
import './Main.scss';
//
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
//App
class Main extends Component {
    constructor (props, context) {

        super(props, context);
       
    }
    state = {
        collapsed: false
    };
    toggle = () => {

        this.setState({
            collapsed: !this.state.collapsed
        });

    };
    render() {

        console.log('home this.props->>>>>>>>>>>>>>>>>>>>>',this.props);
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className='logo' >
                        <img width='32' height='32' src='/public/images/logo.png' />
                        <img className='company-name' width='100' height='32' src='/public/images/logo_text.png' />
                        {/*<span className='company-name'>海云数据</span>*/}
                    </div>
                    <Menu
                        theme='dark'
                        mode={this.state.collapsed ? 'vertical' : 'inline'}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        //style={{ borderRight: 0, overflowX: 'hidden' }}
                    >
                        <SubMenu key='sub1' title={<span><Icon type='bars' />新闻管理</span>}>
                            <Menu.Item key='1'>
                                <Link to={'/news/add'}>
                                    <Icon type='file-add' />
                                    <span className='nav-text'>添加新闻</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <Link to={'/news/edit'}>
                                    <Icon type='edit' />
                                    <span className='nav-text'>编辑新闻</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='3'>
                                <Link to={'/news/list'}>
                                    <Icon type='bars' />
                                    <span className='nav-text'>新闻列表</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='4'>option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub2' title={<span><Icon type='laptop' />subnav 2</span>}>
                            <Menu.Item key='5'>option5</Menu.Item>
                            <Menu.Item key='6'>option6</Menu.Item>
                            <Menu.Item key='7'>option7</Menu.Item>
                            <Menu.Item key='8'>option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub3' title={<span><Icon type='notification' />subnav 3</span>}>
                            <Menu.Item key='9'>option9</Menu.Item>
                            <Menu.Item key='10'>option10</Menu.Item>
                            <Menu.Item key='11'>option11</Menu.Item>
                            <Menu.Item key='12'>option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className='header hy-clearfix' style={{ background: '#fff', padding: 0 }}>
                        <div className='hl hy-fl'>
                            <Icon
                                className='trigger'
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <div className='hr hy-fr'>
                            <Menu mode='horizontal' style={{lineHeight: '64px', background: 'none'}}>
                                <Menu.Item key='mail'>
                                    <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                                        <Icon type='mail' />
                                    </Badge>
                                </Menu.Item>
                                <SubMenu title={< span ><Icon type='user' />admin</span>}>
                                    <Menu.Item key='logout'>
                                        Sign out
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>

        );

    }
    componentDidMount = () => {

        console.log(11);

    }
}

const mapStateToProps = state => {

    return {};

};

const mapDispatchToProps = dispatch => {

    return {
        actions: bindActionCreators({}, dispatch)
    };

};

export default connect (mapStateToProps, mapDispatchToProps)(Main);