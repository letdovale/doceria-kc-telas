// src/Modal.jsx
import React from 'react';
import styles from './Modal.module.css'; // Crie um CSS Module para estilizar o modal

const Modal = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Confirmação de Pedido</h2>
                <p>Seu pedido foi concluído com sucesso!</p>
                <button className={styles.closeButton} onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal;
