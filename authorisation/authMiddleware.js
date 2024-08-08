const auth = require('./authService.js');

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = auth.verifyToken(token);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
