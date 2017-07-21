/**
 *@Author: hy-zhangb
 *Date: 2017-07-04 15:54
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-07-04 15:54
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: hiynn-admin
 *@Description:
 */
import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
//
import PicturesWall from 'src/component/PicturesWall/PicturesWall';
//
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//
class newAdd extends Component {
    render() {

        return (
            <Row gutter={16} className='news-box'>
                <Col className='gutter-row' span={4}>
                    <Card title='缩略图' bordered={true} style={{height: 459}}>
                        <div className='gutter-box'>
                            <PicturesWall />
                        </div>
                    </Card>
                </Col>
                <Col className='gutter-row' span={20}>
                    <Card title='标题与内容' bordered={true}>
                        <div className='gutter-box'>
                            <Editor
                                wrapperClassName='wrapperClass'
                                editorClassName='editorClass'
                                toolbarClassName='toolbarClass'
                                mention={{
                                    separator: ' ',
                                    trigger: '@',
                                    caseSensitive: false,
                                    mentionClassName: 'mention-className',
                                    dropdownClassName: 'dropdown-className',
                                    optionClassName: 'option-className',
                                    suggestions: [
                                        { text: 'apple', value: 'apple', url: 'apple' },
                                        { text: 'banana', value: 'banana', url: 'banana' },
                                        { text: 'cherry', value: 'cherry', url: 'cherry' },
                                        { text: 'durian', value: 'durian', url: 'durian' },
                                        { text: 'eggfruit', value: 'eggfruit', url: 'eggfruit' },
                                        { text: 'fig', value: 'fig', url: 'fig' },
                                        { text: 'grapefruit', value: 'grapefruit', url: 'grapefruit' },
                                        { text: 'honeydew', value: 'honeydew', url: 'honeydew' }
                                    ]
                                }}
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    
    }
    componentDidMount = () => {

        console.log(11);

    }
}

export default newAdd;