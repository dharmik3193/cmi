var express = require('express');
const course = require('../models/courseSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add_course', async function (req, res, next) {

  var data = await course.create(req.body);
  console.log(data);

})

module.exports = router;
