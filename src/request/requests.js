
import axios from 'axios'

import {
    LOGIN_URL
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

export default {
    loginRequest,
}