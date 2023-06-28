var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const itemService = require('../services/item');

// all users
router.get('/all', async (req, res) => {
  const result = await itemService.findAll()
  res.json(result)
})

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await itemService.findById(id);
  res.json(result);
})

// findby cate
router.get('/categoryid/:cate_id', async function (req, res, next) {
  const { cate_id } = req.params;
  const result = await itemService.findByCate(cate_id);
  res.json(result);
})
// auth.ensureSignedIn,
router.post('/create',  async (req, res, next) => {
  const {name, category, desc} = req.body
  const result = await itemService.create({name, category, desc})
  res.json(result);
})


router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {name, category, desc} = req.body
  const {id} = req.params
  const result = await itemService.update(id, {name, category, desc})
  res.json(result);
})
// , auth.ensureSignedIn
router.post('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  const result = await itemService.remove(id);
  res.json(result);
})

module.exports = router