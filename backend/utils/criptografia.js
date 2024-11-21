const bcrypt = require('bcryptjs');

exports.criptografarSenha = (senha) => {
    return bcrypt.hashSync(senha, 8);
};

exports.compararSenha = (senha, hash) => {
    return bcrypt.compareSync(senha, hash);
};
