const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');
const config = require('../config/remote.js')
const {
    mapProperty
} = require('../helpers/mapProperty');

let api = new API('news');

function addNews(data) {
    return api.addNews(data).then(({
        data
    }) => {
        return Promise.resolve(new SuccessModel(data));
    }, (error) => {
        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
    }).catch((error) => {
        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
    })
}

function deleteNews() {

}

function getNewsDetail() {

}

function findNewsPageByDate(data) {
    return api.findNewsPageByDate(data).then(({
        data
    }) => {
        console.log(data)
        return Promise.resolve(new SuccessModel(data));
    }, (error) => {
        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
    }).catch((error) => {
        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
    })
}

function updateNews() {

}

module.exports = {
    addNews,
    deleteNews,
    getNewsDetail,
    findNewsPageByDate,
    updateNews
}