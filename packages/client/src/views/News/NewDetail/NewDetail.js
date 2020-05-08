import MyHeader from '@/components/common/Header/Header.vue'
import MyFooter from '@/components/common/Footer/Footer.vue'
import API from '@/api/index.js'
let newsAPI = new API('news')

export default {
    components: {
        MyHeader,
        MyFooter
    },
    data() {
        return {
            list: [],
            total: 0,
            detail: {}
        }
    },
    mounted() {
        this.setNewsList(1)
        this.setDetail(this.id)
    },
    computed: {
        id() {
            return this.$route.query.id
        }
    },
    watch: {
        id(newVal) {
            this.setDetail(newVal)
        }
    },
    methods: {
        onPageChange(newPage) {
            this.setNewsList(newPage)
        },
        async setNewsList(pageNum) {
            try {
                let {
                    data
                } = await newsAPI.getNewsList({
                    pageNum
                })
                data = data.data
                this.list = data.list
                this.total = data.total
            } catch (e) {
                throw new Error(e)
            }
        },
        async setDetail(id) {
            try {
                let {
                    data
                } = await newsAPI.getNewsDetail({
                    id
                })
                data = data.data
                this.detail = data
            } catch (e) {
                throw new Error(e)
            }
        },
        handleToIntro() {
            window.location.href = "https://baike.sogou.com/historylemma?lId=106040667&cId=143918633"
        },
        handleEnter() {
            this.$router.push({
                name: "application"
            })
        }
    }
}