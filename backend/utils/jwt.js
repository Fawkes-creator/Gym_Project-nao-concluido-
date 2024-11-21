const jwt = require('jsonwebtoken');
const SEGREDO = 'chave_secreta';

exports.gerarToken = usuario => jwt.sign({ id: usuario.id, email: usuario.email, role: usuario.role }, SEGREDO, { expiresIn: '1h' });
exports.verificarToken = token => {
    try {
        return jwt.verify(token, SEGREDO);
    } catch {
        return null;
    }
};
