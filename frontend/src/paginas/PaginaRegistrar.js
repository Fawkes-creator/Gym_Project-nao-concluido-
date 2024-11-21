import React, { useState } from 'react';
import axios from 'axios';

function PaginaRegistrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função para tratar o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar o comportamento padrão de recarregar a página

        try {
            const response = await axios.post('http://localhost:3001/api/usuarios/registrar', {
                nome,
                email,
                senha,
            });

            setMensagem('Usuário cadastrado com sucesso!');
        } catch (error) {
            setMensagem('Erro ao cadastrar usuário. Tente novamente.');
        }
    };

    return (
        <div>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default PaginaRegistrar;
