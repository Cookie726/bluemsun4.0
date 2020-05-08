<template>
  <div>
    <my-header></my-header>
    <div class="page_container">
      <div class="page_main_content">
        <ul class="top">
          <li>发布</li>
        </ul>
        <div class="body">
          <div class="class">
            <span class="left">所在专栏</span>
            <select v-model="newsClass" class="right" id="newsClass">
              <option value="news">新闻</option>
              <option value="notice">通知</option>
            </select>
          </div>
          <div class="title">
            <span class="left">标题</span>
            <input v-model="title" class="right" id="title" />
          </div>
        </div>
        <div class="my_editor"><my-editor :value.sync="content"></my-editor></div>
        <div class="sub">
          <Button type="success" @click="handleAddNews">立即发布</Button>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script src="./AddNews.js"></script>
<style src="./AddNews.scss" lang="scss" scoped></style>
