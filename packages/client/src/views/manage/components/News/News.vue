<template>
  <div>
    <div class="operation_container">
      <div>新闻条数：{{total}}</div>
      <div>
        <Button
          type="success"
          style="margin-right:6px;"
          @click="onClickAddNews"
          >新增新闻</Button
        >
      </div>
    </div>
    <div class="table_container">
      <Table
        border
        :columns="columns"
        :data="newsArray"
        max-height="300"
      ></Table>
    </div>
    <div class="page_container">
      <Page
        :total="total"
        show-elevator
        :current="currentPage"
        @on-change="onChangePage"
        :page-size="5"
      />
    </div>
  </div>
</template>

<script src="./News.js"></script>
<style lang="scss" src="./News.scss" scoped></style>
