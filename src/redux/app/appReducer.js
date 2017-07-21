/*
* @Author: zhangyujie
* @Date:   2017-05-16 09:41:11
* @Last Modified by:   zhangyujie
* @Last Modified time: 2017-05-16 16:13:24
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/src/redux/app/appReducer.js
* @File Name: appReducer.js
* @Descript: 
*/
import createReducer from 'src/utils/createReducer';
/**
 * user = {
 *     name:'基础用户',
 *     role:1
 * }
 * @type {Object}
 */
const appState = {
    'name': '交管项目',
    'version': '0.0.1'
};

export default createReducer(appState, {
    
});