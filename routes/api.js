const express = require('express');

const router = express.Router();

router.use('/companies', require('./companies'));
router.use('/employers', require('./employers'));
router.use('/communications', require('./communications'));
router.use('/calls', require('./calls'));


router.get('/', (req, res) => {
	res.render('api.ejs');
});

module.exports = router;