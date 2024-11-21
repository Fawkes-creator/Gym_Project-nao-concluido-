const { criptografarSenha, verificarSenha } = require('../utils/criptografia');
const { gerarToken } = require('../utils/jwt');
const usuarios = require('../dados/usuarios.json');

exports.registrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;

    if (usuarios.find(usuario => usuario.email === email)) {
        return res.status(400).json({ mensagem: 'E-mail já está em uso' });
    }

    const senhaCriptografada = criptografarSenha(senha);
    const novoUsuario = { id: Date.now(), nome, email, senha: senhaCriptografada, role: 'usuario' };
    usuarios.push(novoUsuario);

    return res.status(201).json({ mensagem: 'Usuário registrado com sucesso', usuario: novoUsuario });
};

exports.loginUsuario = (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario || !verificarSenha(senha, usuario.senha)) {
        return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = gerarToken(usuario);
    return res.status(200).json({ token, usuario });
};

exports.obterPerfil = (req, res) => {
    return res.json(req.usuario);
};
