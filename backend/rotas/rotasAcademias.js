const express = require('express');
const controladorAcademias = require('../controladores/controladorAcademias');

const router = express.Router();

// apenas os admininstradores podem cadastrar academias!!!!!!
router.post('/cadastrar', controladorAcademias.cadastrarAcademia);

// busca academia pelo nome
router.get('/buscar', controladorAcademias.buscarAcademias);

module.exports = router;
