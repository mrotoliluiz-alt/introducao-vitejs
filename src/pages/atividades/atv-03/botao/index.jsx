import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {

    const dinami = styles[acao];
    
    return (
        <button
            className={`${styles.botao} ${dinami}`} 
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;