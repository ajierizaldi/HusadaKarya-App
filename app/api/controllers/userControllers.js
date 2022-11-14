const model = require('../../../models'),
    { genSalt, hash, compareSync } = require('bcrypt'),
    jwt = require('jsonwebtoken')

const cryptPassword = (password) => {
    const salt = genSalt(12)
    return hash(password, salt)
}

module.exports = {
    register: async (req, res) => {
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
    },
    login: async (req, res) => {
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
    },
    getProfile: async (req, res) => {
        try {
            const user = await model.user.findOne({
                where: {
                    id: req.locals.user.id
                }
            })
            if (!user) {
                return res.status(404).json({
                    "message": 'User not found',
                    "error": 0,
                    "data": null,
                    "success": false
                })
            }

            return res.status(200).json({
                "message": 'User profile has found',
                "error": 0,
                "data": user,
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
    },
    updateProfile: async (req, res) => {
        try {
            const user = await model.user.findOne({
                where: {
                    id: req.locals.user.id
                }
            })
            if (!user) {
                return res.status(404).json({
                    "message": 'User not found',
                    "error": 0,
                    "data": null,
                    "success": false
                })
            }

            const updatedUser = await user.update({
                ...req.body
            })

            return res.status(200).json({
                "message": 'User profile has updated',
                "error": 0,
                "data": updatedUser,
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
    },
    deleteProfile: async (req, res) => {
        try {
            const user = await model.user.findOne({
                where: {
                    id: req.locals.user.id
                }
            })
            if (!user) {
                return res.status(404).json({
                    "message": 'User not found',
                    "error": 0,
                    "data": null,
                    "success": false
                })
            }

            await user.destroy()

            return res.status(200).json({
                "message": 'User profile has deleted',
                "error": 0,
                "data": null,
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
}