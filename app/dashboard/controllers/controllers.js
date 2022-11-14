require('dotenv').config();
const axios = require('axios');
const port = process.env.PORT || 3000;

module.exports = {
    index: (req, res) => {
        res.render('pages/index');
    },
    profile: (req, res) => {
        res.render('pages/profile');
    },
    statistic: (req, res) => {
        res.render('pages/statisticPage');
    },
    patient: (req, res) => {
        res.render('pages/pasienPage');
    },
    medicine: (req, res) => {
        axios
            .get(`http://localhost:${port}/api/meds`)
            .then((response) => {
                res.render('pages/medicinePage', { medicines: response.data.data });
            })
            .catch((error) => {
                req.flash("error", "Gagal Menampilkan Data!");
                return res.status(500).redirect("/");
            })
    },
    deleteMed: (req, res) => {
        axios
            .delete(`http://localhost:${port}/api/deleteMed/${req.body.id}`)
            .then((response) => {
                res.redirect('pages/medicinePage', { medicines: response.data.data });
            })
            .catch((error) => {
                console.log(error);
            })
    },
    addMedicine: (req, res) => {
        res.render('pages/addObatPage');
    }
}