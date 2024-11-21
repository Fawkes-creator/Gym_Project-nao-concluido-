const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasAutenticacao = require('./rotas/rotasAutenticacao');
const rotasAcademias = require('./rotas/rotasAcademias');
const rotasCheckins = require('./rotas/rotasCheckins');
const rotasUsuarios = require('./rotas/rotasUsuarios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/autenticacao', rotasAutenticacao);
app.use('/academias', rotasAcademias);
app.use('/checkins', rotasCheckins);
app.use('/api/usuarios', rotasUsuarios);


const PORTA = 3001;
app.listen(PORTA, () => console.log(`Servidor rodando em http://localhost:${PORTA}`));
