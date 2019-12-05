const express = require('express');
const User = require('../../controller/user')
const router = express.Router();
const helper = require('./helper');
const auth = require('./auth');



//list all user
router.get('/', User.getAllUser)

//list one user
router.get('/:id',helper.getUser, User.getUserById)

// create a new user
router.post('/register', User.postNewUser)


// delete a user
router.delete('/:id', helper.getUser, User.deleteUser )

// user login
router.post('/login', User.userLogin)


// user me
router.get('/user/me', auth, User.getUserByToken);

// user log out
router.post('/user/me/logout', auth, User.userLogout)




module.exports = router;
