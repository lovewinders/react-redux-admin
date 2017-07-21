/**
 *@Author: hy-zhangb
 *Date: 2017-07-06 14:16
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-07-06 14:16
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: hiynn-admin
 *@Description:
 */
import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Row, Col, Table, Input, DatePicker, Button, Form } from 'antd';
//
const { Search } = Input;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
//
//menu
const dropDownMenu = (
    <Menu>
        <Menu.Item>
            <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>编辑</a>
        </Menu.Item>
        <Menu.Item>
            <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>删除</a>
        </Menu.Item>
    </Menu>
);
//
const columns = [{
    title: '新闻名称',
    dataIndex: 'newsName'
}, {
    title: '创建时间',
    dataIndex: 'newsTime'
}, {
    title: '缩略图',
    dataIndex: 'img'
},{
    title: '操作',
    dataIndex: 'operation',
    width: 100,
    render: (text, record) => {

        return (
            <Dropdown overlay={dropDownMenu}>
                <Button style={{border: 'none'}}>
                    <Icon type='bars' />
                    <Icon type='down' />
                </Button>
            </Dropdown>
        );

    }
}];

const data = [];
for (let i = 0; i < 46; i++) {

    data.push({
        key: i,
        newsName: `关于海云数据新闻的消息 ${i}`,
        newsTime: '2017-07-06 15:52',
        img: '3张图'
    });

}
//
class NewsList extends Component {
    state = {
        selectedRowKeys: []  // Check here to configure the default column
    };
    onSelectChange = (selectedRowKeys) => {

        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    
    };
    render() {

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {

                    this.setState({
                        selectedRowKeys: [...Array(46).keys()]  // 0...45
                    });
                
                }
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {

                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {

                        if (index % 2 !== 0) {

                            return false;
                        
                        }
                        return true;
                    
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                
                }
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {

                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {

                        if (index % 2 !== 0) {

                            return true;
                        
                        }
                        return false;
                    
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                
                }
            }],
            onSelection: this.onSelection
        };
        return (
            <Row gutter={0}>
                <Col className='gutter-row' span={24}>
                    <Form
                        className='ant-advanced-search-form'
                        onSubmit={this.handleSearch}
                    >
                        <Row gutter={12}>
                            <Col className='gutter-row' md={8} lg={8} xl={5}>
                                <FormItem labelCol={{span: 5}} wrapperCol={{span: 19}} label='新闻名称' >
                                    <Search
                                        placeholder='input search text'
                                        style={{ width: 200 }}
                                        onSearch={value => console.log(value)}
                                    />
                                    <input type='text' className='aaa'/>
                                </FormItem>
                            </Col>
                            <Col className='gutter-row' md={8} lg={8} xl={5}>
                                <FormItem labelCol={{span: 5}} wrapperCol={{span: 19}} label='创建时间' >
                                    <RangePicker />
                                </FormItem>
                            </Col>
                            <Col className='gutter-row' md={4} lg={4} xl={7}>
                                <Button type='primary'>查询</Button>
                            </Col>
                            <Col className='gutter-row' md={9} lg={4} xl={7} style={{textAlign: 'right'}}>
                                <Button type='danger'>批量删除</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col className='gutter-row' span={24}>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        bordered
                    />
                </Col>
            </Row>
        );
    
    }
}

export default NewsList;