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

function getNewsDetail(data) {
    return api.getNewsDetail(data).then(({
        data
    }) => {
        return Promise.resolve(new SuccessModel(data));
    }, (error) => {
        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
    }).catch((error) => {
        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
    })
}

function getNewsList(data) {
    return api.findNewsPageByDate(data)
        .then(({
            data
        }) => {
            let responseData = mapProperty(data, {
                total: 'total',
                list: 'list'
            }, false);

            let list = responseData.list;
            for (let i = 0, length = list.length; i < length; i++) {
                list[i] = mapProperty(list[i], {
                    title: 'title',
                    id: 'id'
                }, false)
            }

            return Promise.resolve(new SuccessModel(responseData));
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
    updateNews,
    getNewsList
}