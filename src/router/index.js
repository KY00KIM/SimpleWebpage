const {Router} = require('express');
const router = Router();

const indexCtrl = require('./ctrl');
const auth = require('./router/auth');

router.get('/', indexCtrl.indexPage);
router.use('/auth', auth);


module.exports = { 
    router
}