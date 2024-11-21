const { verificarToken } = require('../utils/jwt');

exports.autenticar = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ mensagem: 'Token ausente' });

    const usuario = verificarToken(token);

    if (!usuario) return res.status(401).json({ mensagem: 'Token inválido' });

    req.usuario = usuario;
    next();
};
