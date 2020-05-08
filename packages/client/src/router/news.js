import AddNews from '../views/News/AddNews/AddNews.vue'

import { addBaseUrl } from '../helpers/router.js'

const baseUrl = '/news'
let routes = [
    {
        path: 'addNews',      //论坛区
        name: 'addNews',
        component: AddNews
    }
]

function createRoutes(baseUrl, routes) {
    routes = addBaseUrl(baseUrl, routes);

    return routes;
}

export default createRoutes(baseUrl, routes)