let BASE_URL = require("./baseUrl").BASE_URL;

const LOGIN_URL = BASE_URL + '/fundUser/login'; // 用户登录
const LOGOUT_URL = BASE_URL + '/fundUser/logout'; // 用户登出
const REGISTER_URL = BASE_URL + '/fundUser/register'; // 用户注册

const ADD_FUND_URL = BASE_URL + '/myFund/add'; // 增加自选
const DELETE_FUND_URL = BASE_URL + '/myFund/delete'; // 去除自选
const LIST_FUND_URL = BASE_URL + '/myFund/list'; // 列出自选列表

const TREND_URL = BASE_URL + '/chinaMutualFundNav/trend'; // 基金详情页走势
const DETAIL_URL = BASE_URL + '/chinaMutualFundDescription/details'; // 基金详情信息
const SEARCH_URL = BASE_URL + '/chinaMutualFundDescription/search'; // 基金搜索


module.exports = {
    LOGIN_URL,
    LOGOUT_URL,
    REGISTER_URL,

    ADD_FUND_URL,
    DELETE_FUND_URL,
    LIST_FUND_URL,

    TREND_URL,
    DETAIL_URL,
    SEARCH_URL
}