import { useState } from "react";
import styles from './formulario.module.css';

const Formulario = ({ setImc }) => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [res, setRes] = useState("");

    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 25) return "Peso normal";
        if (imc < 30) return "Sobrepeso";
        if (imc < 35) return "Obesidade Grau I";
        if (imc < 40) return "Obesidade Grau II";
        return "Obesidade Grau III";
    };

    const calculaImc = (event) => {
        event.preventDefault();
        const pesoNumerico = parseFloat(peso);
        const alturaNumerica = parseFloat(altura);
        

        if (pesoNumerico > 0 && alturaNumerica > 0) {
            const imc = (pesoNumerico / (alturaNumerica/100 * alturaNumerica/100)).toFixed(1);
            const classificacao = classificarIMC(imc);
            setRes(`Seu IMC é : ${imc} (${classificacao})`)
        } else {
            setRes("Por favor, insira valores válidos!");
        }
    };

    return (
        <div className="container">
            <div className={styles.calculadora}>
                <h1 className={styles.titulo}>Calculadora de IMC</h1>
                <form className={styles.form} onSubmit={calculaImc}>
                    <input onKeyUp={(e) => setAltura(e.target.value)} className={styles.campo} type="number" placeholder="Sua Altura" required/>
                    <input onKeyUp={(e) => setPeso(e.target.value)} className={styles.campo} type="number" placeholder="Seu peso" required/>
                    <button className={styles.button} type="submit">
                        Calcular
                    </button>
                </form>
                <p className={styles.res}>{res}</p>
            </div>
        </div>
    )
}

export default Formulario