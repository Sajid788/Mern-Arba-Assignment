const express = require('express');
const {
  userRegister,
  userLogin,
  updateProfile
} = require('../controller/user_controller');

const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin);
userRouter.put('/:id', updateProfile);


module.exports = { userRouter };