import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PaginaLogin from './paginas/PaginaLogin';
import PaginaRegistrar from './paginas/PaginaRegistrar';
import PaginaPerfil from './paginas/PaginaPerfil';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PaginaLogin />} />
                <Route path="/registrar" element={<PaginaRegistrar />} />
                <Route path="/perfil" element={<PaginaPerfil />} />
            </Routes>
        </Router>
    );
}

export default App;
