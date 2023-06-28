var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const upload = require('../middlewares/upload');

const productService = require('../services/product');
router.get('/price', async (req, res) => {
  const result = await productService.findProductPrice();
  res.json(result);
})
router.get('/all', async (req, res) => {
  const result = await productService.findAllProduct();
  res.json(result);
})

router.get('/all/:category?/:item?', async (req, res) => {
  const { category, item } = req.params;
  const result = await productService.findAll(category, item);
  res.json(result);
})
// auth.ensureSignedIn,
router.get('/:id',  async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  res.json(result);
})
// auth.ensureSignedIn,
router.post('/create', upload.single('imageUrl') , async (req, res, next) => {
  const newProduct = req.body
  const file = req.file.path
  const result = await productService.create(newProduct,file)
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {id} = req.params 
  const newProduct = req.body
  const result = await productService.update(id, newProduct) 
  res.json(result);
})
// auth.ensureSignedIn,
router.post('/delete/:id',  async (req, res, next) => {
  const {id} = req.params
  const result = await productService.remove(id)
  res.json(result);
})



module.exports = router