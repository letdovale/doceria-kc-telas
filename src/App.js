import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import RealizarPedido from './Components/RealizarPedido/RealizarPedido';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<RealizarPedido />} />
      </Routes>
    </Router>
  );
}

export default App;
