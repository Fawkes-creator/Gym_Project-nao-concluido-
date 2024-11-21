const express = require('express');
const controladorCheckins = require('../controladores/controladorCheckins');
const autenticarUsuario = require('../middlewares/autenticarUsuario');

const router = express.Router();

// realiza check-in em uma academia
router.post('/realizar', autenticarUsuario, controladorCheckins.realizarCheckin);

// obtendo histórico de check-ins de um usuário
router.get('/historico', autenticarUsuario, controladorCheckins.obterHistorico);

module.exports = router;
