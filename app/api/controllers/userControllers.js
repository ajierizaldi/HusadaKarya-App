const model = require('../../../models'),
    { genSalt, hash, compareSync } = require('bcrypt'),
    jwt = require('jsonwebtoken')

const cryptPassword = (password) => {
    const salt = genSalt(12)
    return hash(password, salt)
}

module.exports = {
    register: (req, res) => {
        async (req, res) => {
            try {
                const data = await model.user.create({
                    ...req.body,
                    password: cryptPassword(req.body.password)
                })

                return res.status(200).json({
                    "message": 'User created successfully',
                    "error": 0,
                    "data": data,
                    "success": true
                })
            } catch (error) {
                return res.status(500).json({
                    "message": error,
                    "error": error.code,
                    "data": null,
                    "success": false
                })
            }
        }
    },
    login: (req, res) => {
        async (req, res) => {
            try {
                const userExists = await model.user.findOne({
                    where: {
                        email: req.body.email
                    }
                })

                if (!userExists) {
                    return res.status(404).json({
                        "message": 'User not found',
                        "error": 0,
                        "data": null,
                        "success": false
                    })
                }

                if (compareSync(req.body.password, userExists.password)) {
                    const token = jwt.sign({
                        id: userExists.id,
                        email: userExists.email
                    }, process.env.JWT_SECRET, {
                        expiresIn: '12h'
                    })

                    return res.status(200).json({
                        "message": 'User logged in successfully',
                        "error": 0,
                        "data": {
                            token: token
                        },
                        "success": true
                    })
                }
            } catch (error) {
                return res.status(500).json({
                    "message": error,
                    "error": error.code,
                    "data": null,
                    "success": false
                })
            }
        }
    },
    getProfile: (req, res) => {
        async (req, res) => {

        }
    },
    updateProfile: (req, res) => {
        async (req, res) => {

        }
    },
    deleteProfile: (req, res) => {
        async (req, res) => {

        }
    },
}