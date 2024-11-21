const fs = require('fs');
const path = require('path');

const checkinsPath = path.join(__dirname, '../dados/checkins.json');

// Função para carregar os check-ins do arquivo JSON
function carregarCheckins() {
    if (!fs.existsSync(checkinsPath)) {
        fs.writeFileSync(checkinsPath, '[]');
    }
    return JSON.parse(fs.readFileSync(checkinsPath, 'utf-8'));
}

// Função para salvar os check-ins no arquivo JSON
function salvarCheckins(checkins) {
    fs.writeFileSync(checkinsPath, JSON.stringify(checkins, null, 2));
}

// Realizar check-in
exports.realizarCheckin = (req, res) => {
    const { usuarioId, academiaId } = req.body;

    const checkins = carregarCheckins();

    const hoje = new Date().toISOString().split('T')[0];

    const jaFezCheckinHoje = checkins.some(
        (checkin) =>
            checkin.usuarioId === usuarioId &&
            checkin.academiaId === academiaId &&
            checkin.data === hoje
    );

    if (jaFezCheckinHoje) {
        return res
            .status(400)
            .json({ mensagem: 'Você já realizou um check-in nesta academia hoje.' });
    }

    const novoCheckin = {
        id: Date.now(),
        usuarioId,
        academiaId,
        data: hoje,
    };

    checkins.push(novoCheckin);
    salvarCheckins(checkins);

    res.status(201).json({ mensagem: 'Check-in realizado com sucesso!' });
};

// Obter histórico de check-ins
exports.obterHistorico = (req, res) => {
    const { usuarioId } = req.query;

    const checkins = carregarCheckins();
    const historico = checkins.filter((checkin) => checkin.usuarioId === usuarioId);

    res.json(historico);
};
