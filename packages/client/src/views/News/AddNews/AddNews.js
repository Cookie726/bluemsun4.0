import MyHeader from '@/components/common/Header/Header.vue'
import MyEditor from '@/components/common/Editor/Editor.vue'
import MyFooter from '@/components/common/Footer/Footer.vue'
import API from '@/api/index'
let newsAPI = new API('news');

export default {
    data() {
        return {
            newsClass: "news",
            content: "",
            title: ""
        }
    },
    components: {
        MyHeader,
        MyEditor,
        MyFooter
    },
    methods: {
        handleAddNews() {
            if (!this.newsClass || !this.content || !this.title) {
                this.$Message.warning('请检查内容是否填写完整！');
                return;
            } else {
                this.$Modal.confirm({
                    title: '确认发布',
                    content: '<p>是否要发布内容？</p>',
                    onOk: () => {
                        this.$Message.info('确认发布');
                        newsAPI.addNews({
                                newsClass: this.newsClass,
                                content: this.content,
                                title: this.title
                            })
                            .then(({
                                data
                            }) => {
                                console.log(data)
                            })
                    },
                    onCancel: () => {
                        this.$Message.info('取消发布');
                    }
                });
            }
        }
    }
}