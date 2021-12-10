
import axios from 'axios'

import {
    LOGIN_URL, LOGOUT_URL, REGISTER_URL,
    ADD_FUND_URL, DELETE_FUND_URL, LIST_FUND_URL,
    TREND_URL, DETAIL_URL, SEARCH_URL
} from './urls.js'


/**
 * @description 用户登录进入系统
 * @author 罗佳瑞
 * @since 2021年5月26日
 */
function loginRequest(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: LOGIN_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:{},
            data: data,
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

function logoutRequest(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: LOGOUT_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:{},
            data: data,
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

function registerRequest(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: REGISTER_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:{},
            data: data,
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 增加自选
 * @param data
 * @returns {Promise<unknown>}
 */
function addFundRequest(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: ADD_FUND_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:{},
            data: data,
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 删除自选
 * @param data
 * @returns {Promise<unknown>}
 */
function deleteFundRequest(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: DELETE_FUND_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:{},
            data: data,
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 列出该用户的全部自选基金
 * @param param {userId: 12}
 * @returns {Promise<unknown>}
 */
function listFundRequest(param) {
    return new Promise((resolve, reject) => {
        axios({
            url: LIST_FUND_URL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: param,
            data: {},
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 基金走势曲线图
 * @param param {windCode: 008900, period: 1-3}
 * @returns {Promise<unknown>}
 * @author ljr
 * @since 2021-10-21
 */
function trendRequest(param) {
    return new Promise((resolve, reject) => {
        axios({
            url: TREND_URL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: param,
            data: {},
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 基金详情信息
 * @param param {windCode: 008900}
 * @returns {Promise<unknown>}
 */
function detailRequest(param) {
    return new Promise((resolve, reject) => {
        axios({
            url: DETAIL_URL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: param,
            data: {},
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}

/**
 * 基金搜索页面
 * @param param {keyWord: 008900}
 * @returns {Promise<unknown>}
 */
function searchRequest(param) {
    return new Promise((resolve, reject) => {
        axios({
            url: SEARCH_URL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: param,
            data: {},
        })
            .then((res) => {
                // 成功
                resolve(res.data)
            })
            .catch((res) => {
                // 失败
                reject(res)
            })
    })
}


export default {
    loginRequest,
    logoutRequest,
    registerRequest,

    addFundRequest,
    deleteFundRequest,
    listFundRequest,

    trendRequest,
    detailRequest,
    searchRequest,

}