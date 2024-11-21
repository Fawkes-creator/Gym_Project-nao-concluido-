const jwt = require('jsonwebtoken');

// usuario ficticio pra teste
const usuarios = [
    { id: 1, nome: 'Victor', email: 'usuario@exemplo.com', senha: 'senha123', token: null },
];

const autenticarUsuario = (email, senha) => {

    const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
    if (!usuario) {
        throw new Error('Email ou senha inválidos');
    }

    // gera o token JWT
    const token = jwt.sign(
        { id: usuario.id, email: usuario.email, nome: usuario.nome },
        'segredo', // Substitua por uma variável de ambiente em produção
        { expiresIn: '1h' }
    );


    usuario.token = token;

    return { token, nome: usuario.nome, email: usuario.email };
};

module.exports = { autenticarUsuario };
