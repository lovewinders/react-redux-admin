/**
 *@Author: hy-zhangb
 *Date: 2017-05-26 14:26
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-05-26 14:26
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: tueasy-jiaoguan
 *@Description:
 */
const _UUID = () => {

    return ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {

        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);

    }));

};
export default _UUID;