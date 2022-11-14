const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({
            "message": 'Access denied, no token provided',
            "error": 0,
            "data": null,
            "success": false
        })
    }

    // if provided with bearer token, then remove it
    if (token.toLowerCase().startsWith('bearer')) {
        token = token.slice('bearer'.length).trim();
    }

    try {
        const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

        if (!jwtPayload) {
            return res.status(403).json({
                "message": 'Access denied, invalid token',
                "error": 0,
                "data": null,
                "success": false
            })
        }

        res.locale.user = jwtPayload;
        next();
    } catch (error) {
        return res.status(401).json({
            "message": 'Invalid token',
            "error": 0,
            "data": null,
            "success": false
        })
    }
}

module.exports = checkToken