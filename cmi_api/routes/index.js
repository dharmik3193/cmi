var express = require('express');
const catagory = require('../models/catagorySchema');
const course = require('../models/courseSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add_course', async function (req, res, next) {
  try {
    var data = await course.create(req.body);
    res.json({
      status: "Success",
      data
    });
  } catch (error) {
    res.json({ error })
  }
})

router.get('/getall_courses', async (req, res, next) => {
  try {
    var data = await course.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/course/:id', async (req, res, next) => {
  try {
    var data = await course.findById(req.params.id)
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add_catagory', async (req, res, next) => {
  try {
    var data = await catagory.create(req.body);
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/get_catagory', async (req, res, next) => {
  try {
    var data = await catagory.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/catagory/:id', async (req, res, next) => {
  try {
    var data = await catagory.findById(req.params.id)
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router;
