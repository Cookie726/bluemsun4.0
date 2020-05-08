import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/news`;

export default {
    addNews(data) {
        let url = `${baseUrl}/addNews`;

        return axios.post(url, data)
    },

    getNewsList(data) {
        let url = `${baseUrl}/getNewsList`;

        data.newsClass = 'news';
        return axios.get(url, {
            params: data
        })
    },

    getNewsDetail(data) {
        let url = `${baseUrl}/getNewsDetail`;

        return axios.get(url, {
            params: data
        })
    }
}