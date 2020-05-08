import AddNews from '../views/News/AddNews/AddNews.vue'
import NewDetail from '../views/News/NewDetail/NewDetail.vue'

import { addBaseUrl } from '../helpers/router.js'

const baseUrl = '/news'
let routes = [
    {
        path: 'addNews',      //论坛区
        name: 'addNews',
        component: AddNews
    },
    {
        path: 'newDetail',      //论坛区
        name: 'newDetail',
        component: NewDetail
    }
]

function createRoutes(baseUrl, routes) {
    routes = addBaseUrl(baseUrl, routes);

    return routes;
}

export default createRoutes(baseUrl, routes)