let base = require('./config.js');
let axios = require('./createAxios');
let baseUrl = `${base.remote}:${base.port}/news`;
let qs = require('qs');

axios.defaults.withCredential = true

let newsAPI = {
    addNews(data) {
        let url = `${baseUrl}/addNews`;

        return axios.post(url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
            }
        })
    },

    deleteNews(data) {
        let url = `${baseUrl}/deleteNews`;

        return axios.get(url, {
            params: data
        })
    },

    getNewsDetail(data) {
        let url = `${baseUrl}/getNewsDetail`;

        return axios.get(url, {
            params: data
        })
    },

    findNewsPageByDate(data) {
        let url = `${baseUrl}/findNewsPageByDate`;

        return axios.get(url, {
            params: data
        })
    },

    updateNews(data) {
        let url = `${baseUrl}/updateNews`;

        return axios.post(url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
            }
        })
    }
}


module.exports = newsAPI;