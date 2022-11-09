

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
        res.render('pages/medicinePage');
    }
}