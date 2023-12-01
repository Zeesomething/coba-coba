const router = require('express').Router();
const {biodata} = require('../controllers');

// mengeluarkan semua daftar buku
router.get('/', biodata.getDataBiodata);

// show data berdasarkan parameter 'id'
router.get('/:id', biodata.getDataBiodataById);

// menambah data Biodata
router.post('/add', biodata.addDataBiodata);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', biodata.editDataBiodata);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', biodata.deleteDataBiodata);

module.exports = router;