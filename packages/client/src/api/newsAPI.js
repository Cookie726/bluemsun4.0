import base from './config.js'
import axios from 'axios'

let baseUrl = `${base.remote}:${base.port}/news`;

export default {
    addNews(data) {
        let url = `${baseUrl}/addNews`;

        return axios.post(url, data)
    }
}