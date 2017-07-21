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
import { PAGE_ROUTES_SHOW, PAGE_ROUTES_UPDATE } from './pageRoutesActionType';
//
const initialState = [
    {path: 'home', name: '综合态势', check: true},
    {path: 'manage', name: '指挥调度', check: false},
    {path: 'road', name: '实时路况', check: false},
    {path: 'jam', name: '拥堵分析', check: false}
];
const actionHandlers = {
    [PAGE_ROUTES_SHOW]: (state, action) => {

        return [...action.pageRoutes];

    },
    [PAGE_ROUTES_UPDATE]: (state, action) => {

        let nextState = [];
        state.map(item => {

            if(item.path === action.pageRoutes) {

                nextState.push(Object.assign({}, item, { check: true}));

            }else{

                nextState.push(Object.assign({}, item, { check: false}));

            }

        });
        return nextState;

    }

};
export default createReducer(initialState, actionHandlers);