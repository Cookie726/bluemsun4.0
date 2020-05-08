const express = require('express');
const newsService = require('../services/news');
const router = express.Router();

router.post("/addNews", (req, res, next) => {
  return newsService.addNews(req.query).then(data => {
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


router.get("/findNewsPageByDate", (req, res, next) => {
  return newsService.findNewsPageByDate(req.query).then(data => {
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