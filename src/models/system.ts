/*
 * @Author: wangYe 
 * @Date: 2020-12-04 10:32:02 
 * @Last Modified by: wangYe
 * @Last Modified time: 2020-12-04 10:32:25
 */

import { useReducer } from 'react';



interface InitialState {
    collapsed?: boolean
    tabList?: string[] // 所有的应有的点击过后的路由
    active?: number // 当前的路由的索引值
}

interface StateType extends InitialState {
    dispatch: React.Dispatch<{
        type: "CHANGESTATE";
        payload: InitialState;
    }>
}
export default function useSystem(): StateType {

    const initialState: InitialState = {
        collapsed: false, //菜单是否折叠
        tabList: ['首页1', '查询表格2', '管理页面3', '商品排行榜4', '商城管理5', '商品管理6', '首页7', '查询表格8', '管理页面9', '商品排行榜10', '商城管理11', '商品管理12', '首页13', '查询表格14', '管理页面15', '商品排行榜16', '商城管理17', '商品管理18'],
        active: 0
    }

    const reducer = (state: InitialState, { type, payload }: { type: "CHANGESTATE", payload: InitialState }) => {
        switch (type) {
            case "CHANGESTATE": {
                return { ...state, ...payload }
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return { ...state, dispatch }
}