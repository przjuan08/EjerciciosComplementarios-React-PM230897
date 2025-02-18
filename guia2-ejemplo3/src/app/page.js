"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  // Función para sumar
  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  // Función para restar
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  // Función para multiplicar
  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  };

  // Función para dividir
  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      setResultado('Error: División por cero');
    } else {
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivision}`);
    }
  };

  // Función para potenciar
  const potenciar = () => {
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
  };

  // Función para calcular la raíz cuadrada
  const raizCuadrada = () => {
    const resultadoRaiz = Math.sqrt(parseFloat(numero1));
    setResultado(`Resultado de la raíz cuadrada: ${resultadoRaiz}`);
  };

  // Función para borrar los números y reiniciar la calculadora
  const borrar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potenciar</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada</button>
          <button className={styles.button} onClick={borrar}>Borrar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}