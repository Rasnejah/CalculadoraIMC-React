import React, { useState } from 'react';
import './style.css';

import FormIMC from './components/FormIMC';
import LinhaIMC from './components/LinhaIMC';

export default function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [calIMC, setCalcIMC] = useState();
  const [mostrarIMC, SetMostraIMC] = useState();
  function calcularIMC() {
    let imc = peso / Math.pow(altura, 2);
    setCalcIMC(imc);
    MostrarIMC(imc);
  }

  function MostrarIMC(imc) {
    const PESO_IDEAL = 'PESO IDEAL'; // peso ideal 19 - 24
    const SOBRE_PESO = 'SOBRE PESO'; // sobrepeso 25 - 29
    const OBESIDADE1 = 'OBESIDADE GRAU I'; // obesidade grau 1 - 30 -24
    const OBESIDADE2 = 'OBESIDADE GRAU II'; // obesidade grau 2 - 35 - 39
    const OBESIDADE3 = 'OBESIDADE GRAU III'; // obesidade grau 3 - 40 +
    console.log(imc);
    if (imc >= 40) {
      SetMostraIMC(OBESIDADE3);
    } else if ((imc >= 35) & (imc <= 39.99)) {
      SetMostraIMC(OBESIDADE2);
    } else if ((imc >= 30) & (imc <= 34.99)) {
      SetMostraIMC(OBESIDADE1);
    } else if ((imc >= 25) & (imc <= 29.99)) {
      SetMostraIMC(SOBRE_PESO);
    } else {
      SetMostraIMC(PESO_IDEAL);
    }
  }
  return (
    <div className="container overflow-hidden">
      <div className="row gy-9">
        <div className="col-12">
          <div className="p-3 border bg-light">
            <h1 className="text-center">Calculadora IMC</h1>
            <FormIMC event={calcularIMC} altura={setAltura} peso={setPeso} />
            <hr />
            <h1>Classificação</h1>
            {calIMC ? (
              <LinhaIMC imc={calIMC} mostrarIMC={mostrarIMC} />
            ) : (
              <h1>Seu IMC</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
