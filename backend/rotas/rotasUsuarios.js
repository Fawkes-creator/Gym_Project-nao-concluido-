const express = require('express');
const router = express.Router();
const { autenticarUsuario } = require('../controladores/controladorUsuarios');

router.post('/autenticacao/login', (req, res) => {
    const { email, senha } = req.body;

    try {
        const resultado = autenticarUsuario(email, senha);
        res.json({ mensagem: 'Login bem-sucedido!', ...resultado });
    } catch (error) {
        res.status(401).json({ mensagem: error.message });
    }
});

module.exports = router;
