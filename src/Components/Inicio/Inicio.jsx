import React from 'react';
import styles from './Inicio.module.css'; // Importando o CSS Module
import logo from './Logo (2).png';
import { FaShoppingBag } from 'react-icons/fa';
import { RiFileListFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";

// Importando as imagens dos brigadeiros
import brigadeiro1 from './image 2.png';
import brigadeiro2 from './image 2.png';
import brigadeiro3 from './image 2.png';

const Inicio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menuLateral}>
                <img src={logo} alt='Logo KC' />
                <div className={styles.links}>
                    <p>Olá!</p>
                    <ul>
                        <li>
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <a href="#">Realizar Pedido</a>
                        </li>
                        <li>
                            <a href="#">Meus Pedidos</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.mainCorpo}>
                <div className={styles.Titulo}>
                    <p>Bem-vindo(a)!</p>
                </div>
                <div className={styles.containerPedidos}>
                    <ul>
                        <li>
                            <div className={styles.fundoBag}>
                                <FaShoppingBag />
                            </div>
                            <a href="#">Realizar Pedido</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className={styles.fundoBag}>
                                <FaCartPlus />
                            </div>
                            <a href="#">Meus Pedidos</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className={styles.fundoBag}>
                                <RiFileListFill />
                            </div>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </div>

                {/* Adicionando a nova seção de Brigadeiros Clássicos */}
                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Tradicionais</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>                    
                        </div>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Clássicos</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>
                            
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Especiais</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>
                            
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Gourmet</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>
                            
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Premium</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>
                            
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerBrigadeiros}>
                    <h2>Brigadeiros Especiais</h2>
                    <div className={styles.brigadeirosLista}>
                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro1} alt="Brigadeiro Tradicional" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro Tradicional</h3>
                                <span>R$ 3,00</span>
                            </div>
                            
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro2} alt="Brigadeiro de Nutella" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Nutella</h3>
                                <span>R$ 4,00</span>
                            </div>
                        </div>

                        <div className={styles.brigadeiroItem}>
                            <img src={brigadeiro3} alt="Brigadeiro de Leite Ninho" />
                            <div className={styles.descricaoBrigadeiro}>
                                <h3>Brigadeiro de Leite Ninho</h3>
                                <span>R$ 4,50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;