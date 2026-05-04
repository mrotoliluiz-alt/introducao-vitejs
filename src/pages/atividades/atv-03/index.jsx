import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Atividade03() {
    // O hook useState gerencia o valor do contador
    const [contador, setContador] = useState(0);

    const cadastrar = () => setContador('Cadastrar');
    const Editar = () => setContador('Editar');
    const listar = () => setContador('Listar');
    const excluir = () => setContador('Excluir');
    const cancelar = () => setContador('Cancelar');

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>
            <h2>O valor atual é: {contador}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Cadastrar" aoClicar={cadastrar} acao={'cadastrar'} />
            <Botao texto="Editar" aoClicar={Editar} acao={'editar'} />
            <Botao texto="Listar" aoClicar={listar} acao={'listar'} />
            <Botao texto="Excluir" aoClicar={excluir} acao={'excluir'} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={'cancelar'} />
        </div>
    );
}

export default Atividade03;