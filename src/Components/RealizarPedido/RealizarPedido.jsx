// src/RealizarPedido.jsx
import React, { useState } from 'react';
import styles from './RealizarPedido.module.css';
import logo from './Logo (2).png';
import Modal from '../Modal/Modal';

// Importando as imagens dos brigadeiros
import brigadeiro1 from './image 2.png';
import brigadeiro2 from './image 2.png';
import brigadeiro3 from './image 2.png'; 

const brigadeiros = [
    { id: 1, nome: 'Brigadeiro Tradicional', preco: 'R$ 3,00', imagem: brigadeiro1 },
    { id: 2, nome: 'Brigadeiro de Nutella', preco: 'R$ 4,00', imagem: brigadeiro2 },
    { id: 3, nome: 'Brigadeiro de Leite Ninho', preco: 'R$ 4,50', imagem: brigadeiro3 },
    { id: 4, nome: 'Brigadeiro Tradicional', preco: 'R$ 3,00', imagem: brigadeiro1 },
    { id: 5, nome: 'Brigadeiro de Nutella', preco: 'R$ 4,00', imagem: brigadeiro2 },
    { id: 6, nome: 'Brigadeiro de Leite Ninho', preco: 'R$ 4,50', imagem: brigadeiro3 },
    { id: 7, nome: 'Brigadeiro Tradicional', preco: 'R$ 3,00', imagem: brigadeiro1 },
    { id: 8, nome: 'Brigadeiro de Nutella', preco: 'R$ 4,00', imagem: brigadeiro2 },
    { id: 9, nome: 'Brigadeiro de Leite Ninho', preco: 'R$ 4,50', imagem: brigadeiro3 },
];

const RealizarPedido = () => {
    const [quantidades, setQuantidades] = useState(
        brigadeiros.reduce((acc, brigadeiro) => {
            acc[brigadeiro.id] = 1; 
            return acc;
        }, {})
    );

    const [carrinho, setCarrinho] = useState({});
    const [botaoAtivo, setBotaoAtivo] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    const incrementarQuantidade = (id) => {
        setQuantidades(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decrementarQuantidade = (id) => {
        setQuantidades(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1) 
        }));
    };

    const adicionarAoCarrinho = (id) => {
        setCarrinho(prev => {
            const novaQuantidade = quantidades[id];
            const novaCarrinho = {
                ...prev,
                [id]: (prev[id] || 0) + novaQuantidade
            };
            
            const totalCarrinho = Object.values(novaCarrinho).reduce((total, quantidade) => total + quantidade, 0);
            setBotaoAtivo(totalCarrinho >= 25);
            
            return novaCarrinho;
        });
    };

    const totalQuantidadesCarrinho = Object.values(carrinho).reduce((total, quantidade) => total + quantidade, 0);

    const handleConcluirPedido = () => {
        if (botaoAtivo) {
            setMostrarModal(true); // Exibe o modal
        }
    };

    const fecharModal = () => {
        setMostrarModal(false); // Fecha o modal
    };


    return (
        <div className={styles.container}>
            <div className={styles.menuLateral}>
                <img src={logo} alt='Logo KC' />
                <div className={styles.links}>
                    <p>Olá!</p>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Realizar Pedido</a></li>
                        <li><a href="#">Meus Pedidos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.mainCorpo}>
                <div className={styles.Titulo}>
                    <h2>Realizar Pedido</h2>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Todos os Produtos</h2>
                    <div className={styles.brigadeirosLista}>
                        {brigadeiros.map(brigadeiro => (
                            <div key={brigadeiro.id} className={styles.brigadeiroItem}>
                                <img src={brigadeiro.imagem} alt={brigadeiro.nome} />
                                <div className={styles.descricaoBrigadeiro}>
                                    <h3>{brigadeiro.nome}</h3>
                                    <span>{brigadeiro.preco}</span>
                                    <div className={styles.quantidadeContainer}>
                                        <button 
                                            className={styles.botaoQuantidade} 
                                            onClick={() => decrementarQuantidade(brigadeiro.id)}
                                        >
                                            -
                                        </button>
                                        <div className={styles.quantidade}>
                                            {quantidades[brigadeiro.id]}
                                        </div>
                                        <button 
                                            className={styles.botaoQuantidade} 
                                            onClick={() => incrementarQuantidade(brigadeiro.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button 
                                        className={styles.adicionarButton}
                                        onClick={() => adicionarAoCarrinho(brigadeiro.id)}
                                    >
                                        Adicionar
                                    </button>
                                </div>                    
                            </div>
                        ))}
                    </div>
                    <button className={`${styles.concluirPedidoButton} ${!botaoAtivo ? styles.botaoDesativado : ''}`}
                        disabled={!botaoAtivo}
                        onClick={handleConcluirPedido}
                    >
                        Concluir Pedido
                    </button>
                </div>
            </div>
            {mostrarModal && <Modal onClose={fecharModal} />}
        </div>
    );
}

export default RealizarPedido;