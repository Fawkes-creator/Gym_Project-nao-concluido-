import React, { useState } from 'react';
import api from '../servicos/api';

const PaginaLogin = () => {
    const [dadosFormulario, setDadosFormulario] = useState({ email: '', senha: '' });

    const alterarDados = e => {
        const { name, value } = e.target;
        setDadosFormulario(prev => ({ ...prev, [name]: value }));
    };

    const enviarFormulario = async e => {
        e.preventDefault();
        try {
            const resposta = await api.post('/autenticacao/login', dadosFormulario);
            localStorage.setItem('token', resposta.data.token); // Salva o token no armazenamento local
            alert('Login realizado com sucesso!');
        } catch (erro) {
            alert(erro.response?.data?.mensagem || 'Erro ao fazer login.');
        }
    };

    return (
        <form onSubmit={enviarFormulario}>
            <h1>Login</h1>
            <input
                name="email"
                placeholder="E-mail"
                value={dadosFormulario.email}
                onChange={alterarDados}
            />
            <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={dadosFormulario.senha}
                onChange={alterarDados}
            />
            <button type="submit">Entrar</button>
        </form>
    )
};
export default PaginaLogin;
