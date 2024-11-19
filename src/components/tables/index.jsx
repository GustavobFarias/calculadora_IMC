import { useState } from "react";
import styles from './tables.module.css';

const Tables = () => {
    

    return (
        <div className="container">
            <table>
                <thead className={styles.header_table}>
                    <tr>
                        <th className={styles.header_table_titulo}>IMC</th>
                        <th className={styles.header_table_titulo}>CLASSIFICAÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IMC &lt; 18,5 Kg/m²</td>
                        <td className={styles.baixo}>Baixo Peso</td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 18,5 e &lt; 24,9 Kg/m²</td>
                        <td className={styles.normal}>Peso Normal</td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 25 e 27,5 Kg/m²</td>
                        <td className={styles.excesso}>Excesso de Peso </td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 27,5 e &lt; 30 Kg/m²</td>
                        <td className={styles.obesidade}>Obesidade</td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 30 &lt; 34,9 Kg/m²</td>
                        <td className={styles.obesidadeI}>Obesidade Classe I</td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 35 e &lt; 18,5 Kg/m²</td>
                        <td className={styles.obesidadeII}>Obesidade Classe II</td>
                    </tr>
                    <tr>
                        <td>IMC &gt; 40 Kg/m²</td>
                        <td className={styles.Móbida}>Obesidade Móbida</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tables