var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const userService = require('../services/user');
const { logout } = require('../services/logout');

// all users
router.get('/all', auth.ensureSignedIn, async (req, res) => {
  const result = await userService.findAll()
  res.json(result)
})

//find by id
router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
    const { id } = req.params;
    const result = await userService.findById(id);
    res.json(result);
})

router.post('/update-password', auth.currentUser, async (req, res, next) => {
  const currentUserID = req?.currentUser;
  const {current_password, new_password, repeat_password} = req.body;
  const result = await userService.updatePass(currentUserID, current_password, new_password, repeat_password)
  res.json(result);
})

router.post('/update', auth.currentUser, async (req, res, next) => {
  const currentUserID = req?.currentUser;
  const { firstName, lastName } = req.body;
  const result = await userService.update(currentUserID, firstName, lastName);
  res.json(result);
})

router.post('/delete', auth.currentUser, async (req, res, next) => {
  const currentUserID = req?.currentUser;
  const result = await userService.remove(currentUserID);
  if(result.success){
    logout(req.session)
  }
  res.json(result);
})

module.exports = router