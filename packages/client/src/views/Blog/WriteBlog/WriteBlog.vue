<template>
  <div>
    <my-header></my-header>
    <div class="page_container">
      <div class="page_main_content">
        <ul class="top">
          <li>发布博客</li>
        </ul>
        <div class="body">
          <div class="class">
            <span class="left">所在专栏</span>
            <select class="right" id="blogClass">
              <option>前端</option>
              <option>后端</option>
            </select>
          </div>
          <div class="title">
            <span class="left">标题</span>
            <input class="right" id="title" />
          </div>
        </div>
        <div class="my_editor"><my-editor></my-editor></div>
        <div class="sub">
          <Button type="success">立即发布</Button>
          <Button type="error">保存草稿</Button>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script src="./WriteBlog.js"></script>
<style src="./WriteBlog.scss" lang="scss" scoped></style>
