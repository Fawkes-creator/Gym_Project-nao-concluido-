const fs = require('fs');
const path = require('path');

const academiasPath = path.join(__dirname, '../dados/academias.json');

// Função para carregar as academias do arquivo JSON
function carregarAcademias() {
    if (!fs.existsSync(academiasPath)) {
        fs.writeFileSync(academiasPath, '[]');
    }
    return JSON.parse(fs.readFileSync(academiasPath, 'utf-8'));
}

// Função para salvar as academias no arquivo JSON
function salvarAcademias(academias) {
    fs.writeFileSync(academiasPath, JSON.stringify(academias, null, 2));
}

// Cadastrar uma nova academia
exports.cadastrarAcademia = (req, res) => {
    const { nome, descricao, telefone, latitude, longitude } = req.body;

    if (!req.admin) {
        return res.status(403).json({ mensagem: 'Apenas administradores podem cadastrar academias.' });
    }

    const academias = carregarAcademias();
    const novaAcademia = {
        id: Date.now(),
        nome,
        descricao,
        telefone,
        latitude,
        longitude,
    };

    academias.push(novaAcademia);
    salvarAcademias(academias);

    res.status(201).json({ mensagem: 'Academia cadastrada com sucesso!' });
};

// Buscar academias pelo nome
exports.buscarAcademias = (req, res) => {
    const { nome } = req.query;

    const academias = carregarAcademias();
    const resultado = academias.filter((academia) =>
        academia.nome.toLowerCase().includes(nome.toLowerCase())
    );

    res.json(resultado);
};
