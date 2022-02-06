const {Router} =require ('express');

const indexCtrl = require('./ctrl');
const auth = require('./auth');

const router =Router();

router.get('/', indexCtrl.indexPage);

router.use('/auth', auth);

module.exports = router;
