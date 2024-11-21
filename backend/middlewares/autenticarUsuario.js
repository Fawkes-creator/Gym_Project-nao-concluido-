const jwt = require('jsonwebtoken');

const segredo = 'adm'; // Use a mesma chave do controlador de usuários!

// Middleware para autenticar o usuário
function autenticarUsuario(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido.' });
    }

    try {
        const payload = jwt.verify(token, segredo);
        req.usuarioId = payload.id; // Passa o ID do usuário autenticado para as rotas
        req.admin = payload.admin; // Verifica se o usuário é administrador
        next();
    } catch (erro) {
        return res.status(403).json({ mensagem: 'Token inválido ou expirado.' });
    }
}

module.exports = autenticarUsuario;
