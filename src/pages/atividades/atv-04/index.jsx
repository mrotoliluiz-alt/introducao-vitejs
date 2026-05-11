/**
 * @file   src\pages\atividades\atv-04\index.jsx
 * @author MatheusR
 * @date   2026-04-14
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    // exemplo básico entrada de dados
    const [item, setItem] = useState('');
    const [qnt, setQnt] = useState ('')
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Enviando para API:", formData);
        // Aqui você faria um POST para sua API
        setLista([...lista, { nome: item, quantidade: qnt }]);
    };
    
    return (
        <div className={styles.container}>

            <h1>Atividade 4 - lista de compras</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>

                <label htmlFor="item">Produto:</label>

                <input
                    id="quant"
                    type="number"
                    placeholder='Qnt'
                    value={qnt}
                    onChange={e => setQnt(e.target.value)}
                />

                
                {/* exemplo básico entrada de dados */}
                <input
                    id="item"
                    type="text"
                    placeholder='Insira um item aqui'
                    value={item}
                    onChange={e => setItem(e.target.value)}
                />

                
                
                <button type="submit">Enviar Cadastro</button>
            </form>

            <h2>Lista</h2>
            {
                lista.map((item, index) => (
                <p key={index}> {item.quantidade} - {item.nome} </p>
))
            }
        </div>
    );
}