/**
 *@Author: hy-zhangb
 *Date: 2017-06-23 16:52
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-06-23 16:52
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: tueasy-jiaoguan
 *@Description:
 */
import createReducer from 'src/utils/createReducer';
import { LOGIN } from './authActionType';
//
const initialState = {
    name: 'admin',
    type: '总管理员',
    role: 0
};
const actionHandlers = {
    [LOGIN]: (state, action) => {

        console.log('success','success',action);
        return Object.assign({}, action.user);

    }

};
export default createReducer(initialState, actionHandlers);