import API from '@/api/index.js'
let manageAPI = new API('manage')

export default {
    data() {
        return {
            columns: [{
                title: '标题',
                key: 'title'
            }, {
                title: '时间',
                key: 'date'
            }, {
                title: '操作',
                key: 'action',
                width: 200,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.getDetail(params.row.id)
                                }
                            }
                        }, '详情'),
                        h('Button', {
                            props: {
                                type: 'success',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.updateNews(params.row.id)
                                }
                            }
                        }, '修改'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    this.deleteNews(params.row.id);
                                }
                            }
                        }, '删除')
                    ]);
                }
            }],
            currentPage: 1,
            newsArray: [],
            total: 0,
        }
    },

    created() {
        this.goto(1);
    },

    methods: {
        onChangePage(pageNum) {
            this.goto(pageNum);
        },
        async goto(pageNum) {
            let {
                data
            } = await manageAPI.getNewsList({
                pageNum
            })

            data = data.data;
            this.newsArray = data.list;
            this.total = data.total;
            this.$forceUpdate();
        },
        onClickAddNews() {
            const addNewsData = this.$router.resolve({
                name: "addNews"
            })
            window.open(addNewsData.href, "_blank")
        },
        getDetail(id) {
            const newsDetailData = this.$router.resolve({
                name: "newDetail",
                query: {
                    id
                }
            })
            window.open(newsDetailData.href, "_blank")
        },
        deleteNews(id) {
            this.$Modal.confirm({
                title: "删除新闻",
                content: "<p>是否要删除该新闻</p>",
                onOk: async () => {
                    try {
                        const {
                            data
                        } = await manageAPI.deleteNews({
                            id
                        })
                        if (data.data.stateCode === '1') {
                            this.$Message.success(data.data.message)
                            this.newsArray = this.newsArray.filter(item => item.id != id)
                        } else {
                            this.$Message.warning(data.data.message)
                        }
                    } catch (e) {
                        this.$Message.error("删除出错")
                        throw new Error(e)
                    }
                }
            })
        }
    }
}