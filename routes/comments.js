const router = require('express').Router();
const passport = require('passport');
const CommentCtrl = require('../controllers/comments')


router.get('/transactions/:id/comments/new', CommentCtrl.showCreatePage)


router.post('/transactions/:id/comments', CommentCtrl.create)


module.exports = router