var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const priceService = require('../services/price');
// auth.ensureSignedIn,

router.post('/create',  async (req, res) => {
  const { product, price, source } = req.body;
  const result = await priceService.create({ product, price, source })
  res.json(result);
})

// all itens
router.get('/all',async (req, res) => {
  // to do
    const result = await priceService.findAll();
    res.json(result);
})

router.get('/:id', async(req,res) => {
  const { id } = req.params;
  const result = await priceService.findById(id)
  res.json(result);
})

router.post('/update/:id', async( req,res) => {
  const { price, source, product } = req.body
  const { id } = req.params
  const result = await priceService.update(id, { price, source, product })
  res.json(result);
})

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params
  const result = await priceService.remove(id)
  res.json(result);
})

module.exports = router