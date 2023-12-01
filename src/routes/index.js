const router = require('express').Router();
// another route below this line
const penulisRoute = require('./penulis');
const bukuRoute = require('./buku')
const biodataRoute = require('./biodata')

router.use('/penulis', penulisRoute);
router.use('/buku', bukuRoute)
router.use('/biodata', biodataRoute)
// other route
module.exports = router;