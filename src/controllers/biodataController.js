const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataBiodata = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM biodata", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

const getDataBiodataById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM biodata WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {

        res.send({
            success: true,
            message: "berhasil",
            data: data,
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}


const addDataBiodata = async (req, res) => {
    let data = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        tanggal_lahir: req.body.tanggal_lahir,
        tempat_lahir: req.body.tempat_lahir,
        agama: req.body.agama,
        alamat: req.body.alamat,
        telepon: req.body.telepon,
        email: req.body.email
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO biodata SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

const editDataBiodata = async (req, res) => {
    let id = req.params.id;
    let data = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        tanggal_lahir: req.body.tanggal_lahir,
        tempat_lahir: req.body.tempat_lahir,
        agama: req.body.agama,
        alamat: req.body.alamat,
        telepon: req.body.telepon,
        email: req.body.email
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE biodata SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

const deleteDataBiodata = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM biodata where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataBiodata,
    getDataBiodataById,
    addDataBiodata,
    editDataBiodata,
    deleteDataBiodata
}