const express = require('express');
const { registrarUsuario, loginUsuario, obterPerfil } = require('../controladores/controladorAutenticacao');
const { autenticar } = require('../middlewares/middlewareAutenticacao');

const router = express.Router();

router.post('/registrar', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/perfil', autenticar, obterPerfil);

module.exports = router;
