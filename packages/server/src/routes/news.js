const express = require('express');
const newsService = require('../services/news');
const router = express.Router();

router.post("/addNews", (req, res, next) => {
  return newsService.addNews(req.body).then(data => {
    res.end(JSON.stringify(data))
  }, error => {
    res.end(JSON.stringify(error))
  });
})

router.get("/deleteNews", (req, res, next) => {
  return newsService.deleteNews(req.query).then(data => {
    res.end(JSON.stringify(data))
  }, error => {
    res.end(JSON.stringify(error))
  });
})

router.get("/getNewsDetail", (req, res, next) => {
  return newsService.getNewsDetail(req.query).then(data => {
    res.end(JSON.stringify(data))
  }, error => {
    res.end(JSON.stringify(error))
  });
})


router.get("/getNewsList", (req, res, next) => {
  return newsService.getNewsList(req.query).then(data => {
    res.end(JSON.stringify(data))
  }, error => {
    res.end(JSON.stringify(error))
  });
})

router.post("/updateNews", (req, res, next) => {
  return newsService.updateNews(req.query).then(data => {
    res.end(JSON.stringify(data))
  }, error => {
    res.end(JSON.stringify(error))
  });
})

module.exports = router;