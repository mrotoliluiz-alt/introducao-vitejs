import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} 
            ${acao === 'conteiner' ? styles.conteiner : ''}
            ${acao === 'editar' ? styles.editar : ''}
            ${acao === 'conteiner' ? styles.conteiner : ''}
            ${acao === 'conteiner' ? styles.conteiner : ''}
            `}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;