<template>
  <div>
    <my-header></my-header>
    <div class="page_container">
      <div class="left">
        <div class="title" id="title">{{ detail.title }}</div>
        <div class="date" id="date">日期：{{ detail.date }}</div>
        <div class="content" id="content" v-html="detail.content">{{ detail.content }}</div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">本周新闻</div>
          <div class="main">
            <ul id="news-ul">
              <li v-for="newsItem in list" :key="newsItem.id">
                <router-link
                  :to="{ name: 'newDetail', query: { id: newsItem.id } }"
                  >{{ newsItem.title }}</router-link
                >
              </li>
            </ul>
            <div class="devidePage-container">
              <Page
                :total="total"
                :page-size="5"
                simple
                @on-change="onPageChange"
              ></Page>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="title">关注蓝旭</div>
          <div class="main">
            <i-button
              style="padding: 14px; font-size: 18px"
              type="primary"
              size="large"
              long
              @click="handleEnter"
              >报名通道</i-button
            >
          </div>
        </div>
        <div class="bottom">
          <div class="title">了解更多</div>
          <div class="main">
            <i-button
              style="padding: 14px; font-size: 18px"
              type="primary"
              size="large"
              long
              @click="handleToIntro"
              >蓝旭简介</i-button
            >
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script src="./NewDetail.js"></script>

<style src="./NewDetail.scss" lang="scss" scoped></style>
