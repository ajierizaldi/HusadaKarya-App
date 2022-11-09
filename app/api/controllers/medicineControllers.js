const model = require('../../../models');

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await model.medicine.findAll();

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully listed",
                "data": datas
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.message,
                "message": error,
                "data": null
            });
        }
    },
    create: async (req, res) => {
        try {
            const data = await model.medicine.create(req.body);

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully created",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    update: async (req, res) => {
        try {
            const data = await model.medicine.update({
                medicine_name: req.body.medicine_name,
                exp_year: req.body.exp_year,
                qty: req.body.qty
            }, {
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully updated",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    destroy: async (req, res) => {
        try {
            const data = await model.medicine.destroy({
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully deleted",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
}
