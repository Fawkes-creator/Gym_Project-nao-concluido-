import React, { useEffect, useState } from 'react';
import axios from '../servicos/api';


function PaginaPerfil() {
    const [perfil, setPerfil] = useState({});

    useEffect(() => {
        const carregarPerfil = async () => {
            try {
                const token = localStorage.getItem('token');
                const resposta = await axios.get('/usuarios/perfil', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPerfil(resposta.data);
            } catch (erro) {
                alert('Erro ao carregar perfil.');
            }
        };

        carregarPerfil();
    }, []);

    return (
        <div>
            <h1>Perfil</h1>
            <p><strong>Nome:</strong> {perfil.nome}</p>
            <p><strong>Email:</strong> {perfil.email}</p>
        </div>
    );
}

export default PaginaPerfil;
