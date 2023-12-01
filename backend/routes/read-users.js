const router = require('express').Router();
const ReadUsersController = require('../controllers/ReadUsersController')

router.get('/readUsers', ReadUsersController.readUsers);







module.exports = router
