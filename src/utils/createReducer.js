/*
* @Author: zhangyujie
* @Date:   2017-05-16 10:51:28
* @Last Modified by:   zhangyujie
* @Last Modified time: 2017-05-16 10:51:43
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/src/utils/createReducer.js
* @File Name: createReducer.js
* @Descript: 
*/

'use strict';
export  default function (initialState, reducerMap) {

    return (state = initialState, action) => {

        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action) : state;
    
    };

}