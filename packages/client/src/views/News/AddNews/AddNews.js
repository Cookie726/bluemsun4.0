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
                        newsAPI.addNews({
                                newsClass: this.newsClass,
                                content: this.content,
                                title: this.title
                            })
                            .then(({
                                data
                            }) => {
                                if (data.data.stateCode === "1") {
                                    this.$Message.success("发布成功")
                                } else {
                                    this.$Message.warning(data.data.message)
                                }
                            }).catch(e => {
                                this.$Message.error("发布错误")
                                throw new Error(e)
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