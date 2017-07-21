/**
 *@Author: hy-zhangb
 *Date: 2017-06-23 16:51
 *@Last Modified by: zhangb
 *@Last Modified time: 2017-06-23 16:51
 *Email: lovewinders@163.com
 *File Path: //
 *@File Name: tueasy-jiaoguan
 *@Description:
 */
import { LOGIN } from './authActionType';
//update page-routes Data
export function login(data) {

    return {
        type: LOGIN,
        user: data
    };

}