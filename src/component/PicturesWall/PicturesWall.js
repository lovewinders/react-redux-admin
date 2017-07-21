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
import { Icon, Upload, Modal } from 'antd';
//
class PicturesWall extends Component {
    constructor(props) {

        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]
        };

    }
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = (file) => {

        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        });
    
    };
    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className='ant-upload-text'>上传缩略图</div>
            </div>
        );
        return (
            <div className='clearfix'>
                <Upload
                    action='//jsonplaceholder.typicode.com/posts/'
                    listType='picture-card'
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    
    }
}

export default PicturesWall;