import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLogin from './paginas/PaginaLogin';
import PaginaRegistrar from './paginas/PaginaRegistrar';
import PaginaPerfil from './paginas/PaginaPerfil';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaLogin />} />
                <Route path="/registrar" element={<PaginaRegistrar />} />
                <Route path="/perfil" element={<PaginaPerfil />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
