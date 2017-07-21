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
import { PAGE_ROUTES_SHOW, PAGE_ROUTES_UPDATE } from './pageRoutesActionType';
//show page-routes Data
export function pageRoutes(data) {

    return {
        type: PAGE_ROUTES_SHOW,
        pageRoutes: data
    };

}
//update page-routes Data
export function pageRoutesUpdate(path) {

    return {
        type: PAGE_ROUTES_UPDATE,
        pageRoutes: path
    };

}