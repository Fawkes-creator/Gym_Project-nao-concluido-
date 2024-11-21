const apiBaseUrl = 'http://localhost:3001'; 

// Função para fazer login
export async function login(email, senha) {
    try {
        const resposta = await fetch(`${apiBaseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (!resposta.ok) {
            throw new Error('Erro ao fazer login');
        }

        const dados = await resposta.json();
        return dados; 
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Função para registrar um usuário
export async function registrar(nome, email, senha) {
    try {
        const resposta = await fetch(`${apiBaseUrl}/registrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!resposta.ok) {
            throw new Error('Erro ao registrar usuário');
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Função para obter o perfil do usuário (necessário estar autenticado)
export async function obterPerfil(token) {
    try {
        const resposta = await fetch(`${apiBaseUrl}/perfil`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!resposta.ok) {
            throw new Error('Erro ao obter perfil');
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Função para realizar um check-in (necessário estar autenticado)
export async function realizarCheckin(token, academiaId) {
    try {
        const resposta = await fetch(`${apiBaseUrl}/checkin`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ academiaId }),
        });

        if (!resposta.ok) {
            throw new Error('Erro ao realizar check-in');
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}
const api = {
    login,
    obterPerfil,
    realizarCheckin,
    registrar
};
 //???????Faltou criar método post para login

export default api;
