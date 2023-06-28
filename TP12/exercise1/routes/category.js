var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');
const upload = require('../middlewares/upload');

// all users
router.get('/all', async (req, res) => {  
  const result = await categoryService.findAll();
  res.json(result);
})
// Categorized items
router.get('/categorized-items', async (req, res) => {
  const result = await categoryService.findCategorizedItems()
  res.json(result);
})
// auth.ensureSignedIn,
router.get('/:id',  async function (req, res, next) {
  const { id } = req.params;
  const result = await categoryService.findById(id)
  res.json(result);
})
// auth.ensureSignedIn,
// , upload.single('imageUrl')
router.post('/create' ,async (req, res, next) => {
  const {name, desc, imageUrl } = req.body
  // const file = req.file.path
                                                              // , file
  const result = await categoryService.create({name, desc, imageUrl});
  res.json(result);
})
// auth.ensureSignedIn,
router.post('/update/:id',  async (req, res, next) => {
  const { name, desc, imageUrl } = req.body
  const { id } = req.params
  console.log(id);
  const result = await categoryService.update(id, {name, desc, imageUrl})
  res.json(result);
})

router.post('/delete/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await categoryService.remove(id)
  res.json(result);
})

module.exports = router